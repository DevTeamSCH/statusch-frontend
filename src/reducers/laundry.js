import {
  GET_LAUNDRY_FLOORS,
} from '../actions/types'

const initialState = {
  floors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNDRY_FLOORS:
      return { ...state, floors: action.payload }
    default:
      return state
  }
}
