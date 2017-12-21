import {
  GET_LAUNDRY_FLOORS,
} from './types'

export const getLaundry = () => async (dispatch) => {
  const floors = await fetch('/api/v1/laundry-room/').then(response => response.json())
  dispatch({ type: GET_LAUNDRY_FLOORS, payload: floors })
}

export const subscribe = (floor, machine) => async (dispatch) => {
  console.log('szint', floor)
  console.log('eszköz', machine)
}
