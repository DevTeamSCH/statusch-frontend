import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
  MACHINE_SUBSCRIBE,
} from './types'

export const getLaundry = () => async (dispatch, getState) => {
  const floors = await fetch('/api/v1/laundry-room/').then(response => response.json())
  const { floors: oldFloors, subscriptions } = getState().laundry;

  if ((subscriptions.length > 0) && (('Notification' in window) && (Notification.permission === 'granted'))) {
    const oldMachines = [].concat(...oldFloors.map(oldFloor => oldFloor.machines.map(oldMachine => oldMachine)))

    floors.forEach((floor) => {
      floor.machines.forEach((machine) => {
        if (subscriptions.includes(machine.id)) {
          const oldState = oldMachines.find(x => x.id === machine.id)
          if (oldState.state !== machine.state) {
            const kind = machine.kind === 'WM' ? 'mosógép' : 'szárító'
            // TODO: backend should give new kind if data is too old or
            // check should be implemented here
            // eslint-disable-next-line
            new Notification('MosógépSCH', {
              body: `Frissült egy feliratkozott ${kind} állapota`,
              icon: 'status_icon.png',
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
    // TODO: wait for user interaction before continuing
    switch (Notification.permission) {
      case 'default':
        Notification.requestPermission()
        break
      case 'denied':
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: 'Értesítések nem engedélyezettek',
            status: 'critical',
          },
        })
        break
      default:
        dispatch({ type: MACHINE_SUBSCRIBE, payload: machine })
        dispatch({
          type: SHOW_TOAST,
          payload: {
            text: 'Sikeres feliratkozás',
            status: 'ok',
          },
        })
        break
    }
  }
}

export const hideToast = () => async (dispatch) => {
  dispatch({ type: HIDE_TOAST })
}
