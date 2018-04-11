import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
  MACHINE_SUBSCRIBE,
  MACHINE_UNSUBSCRIBE,
  LOAD_SAVE,
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
      localStorage.setItem('mosogepschdatasave', JSON.stringify([...state.subscriptions, action.payload]))
      return { ...state, subscriptions: [...state.subscriptions, action.payload] }
    case MACHINE_UNSUBSCRIBE:
      localStorage.setItem('mosogepschdatasave', JSON.stringify(action.payload))
      return { ...state, subscriptions: action.payload }
    case LOAD_SAVE:
      return { ...state, subscriptions: action.payload }
    default:
      return state
  }
}
