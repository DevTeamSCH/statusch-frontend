import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
} from './types'

export const getLaundry = () => async (dispatch) => {
  const floors = await fetch('/api/v1/laundry-room/').then(response => response.json())

  dispatch({ type: GET_LAUNDRY_FLOORS, payload: floors.sort((a, b) => a.id - b.id) })
}

export const subscribe = (floor, machine) => async (dispatch) => {
  dispatch({ type: SHOW_TOAST, payload: { floor, machine, status: 'warning' } })
}

export const hideToast = () => async (dispatch) => {
  dispatch({ type: HIDE_TOAST })
}
