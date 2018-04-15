import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
  MACHINE_SUBSCRIBE,
  MACHINE_UNSUBSCRIBE,
  LOAD_SAVE,
} from './types'

export const getLaundry = () => async (dispatch, getState) => {
  const floors = await fetch('/api/v1/laundry-room/').then(response => response.json())
  const { floors: oldFloors, subscriptions } = getState().laundry;

  if ((subscriptions.length > 0 && oldFloors.length > 0) && (('Notification' in window) && (Notification.permission === 'granted'))) {
    const oldMachines = [].concat(...oldFloors.map(oldFloor => oldFloor.machines.map(oldMachine => oldMachine)))

    floors.forEach((floor) => {
      floor.machines.forEach((machine) => {
        if (subscriptions.includes(machine.id)) {
          const oldState = oldMachines.find(x => x.id === machine.id)
          if (oldState.status !== machine.status) {
            const kind = machine.kind === 'WM' ? 'mosógép' : 'szárító'
            // eslint-disable-next-line
            new Notification('MosógépSCH', {
              body: `Frissült egy feliratkozott ${kind} állapota`,
              icon: '/status_icon.png',
            })
          }
        }
      })
    })
  }

  dispatch({ type: GET_LAUNDRY_FLOORS, payload: floors.sort((a, b) => a.id - b.id) })
}

export const subscribe = machine => async (dispatch) => {
  if (!('Notification' in window)) {
    dispatch({
      type: SHOW_TOAST,
      payload: {
        text: 'Értesítések nem támogatottak',
        status: 'critical',
      },
    })
  } else {
    switch (Notification.permission) {
      case 'denied':
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: 'Értesítések nem engedélyezettek',
            status: 'critical',
          },
        })
        break
      case 'granted':
        dispatch({ type: MACHINE_SUBSCRIBE, payload: machine })
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: 'Sikeres feliratkozás',
            status: 'ok',
          },
        })
        break
      default:
        Notification.requestPermission((result) => {
          if (result === 'granted') {
            dispatch({ type: MACHINE_SUBSCRIBE, payload: machine })
            dispatch({
              type: SHOW_TOAST,
              payload: {
                text: 'Sikeres feliratkozás',
                status: 'ok',
              },
            })
          } else if (result === 'denied') {
            dispatch({
              type: SHOW_TOAST,
              payload: {
                text: 'Értesítések nem engedélyezettek',
                status: 'critical',
              },
            })
          }
        })
        break
    }
  }
}

export const unsubscribe = machine => async (dispatch, getState) => {
  const { subscriptions } = getState().laundry
  dispatch({ type: MACHINE_UNSUBSCRIBE, payload: (subscriptions.filter(i => i !== machine)) })
  dispatch({
    type: SHOW_TOAST,
    payload: {
      text: 'Sikeres leiratkozás',
      status: 'ok',
    },
  })
}

export const hideToast = () => async (dispatch) => {
  dispatch({ type: HIDE_TOAST })
}

export const loadSave = save => async (dispatch) => {
  dispatch({ type: LOAD_SAVE, payload: save })
}
