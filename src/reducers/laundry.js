import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
  MACHINE_SUBSCRIBE,
} from '../actions/types'

const initialState = {
  floors: [],
  showToast: false,
  toastData: {},
  subscriptions: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNDRY_FLOORS:
      return { ...state, floors: action.payload }
    case SHOW_TOAST:
      return { ...state, showToast: true, toastData: action.payload }
    case HIDE_TOAST:
      return { ...state, showToast: false, toastData: {} }
    case MACHINE_SUBSCRIBE:
      return { ...state, subscriptions: [...state.subscriptions, action.payload] }
    default:
      return state
  }
}
