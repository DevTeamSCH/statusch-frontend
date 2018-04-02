import {
  GET_LAUNDRY_FLOORS,
  SHOW_TOAST,
  HIDE_TOAST,
} from './types'

export const getLaundry = () => async (dispatch) => {
  // const floors = await fetch('/api/v1/laundry-room/').then(response => response.json())
  const floors = [{
    id: 3,
    machines: [{
      id: 2,
      kind_of: 'DR',
      status: 0,
      message: null,
    }, {
      id: 1,
      kind_of: 'WM',
      status: 1,
      message: null,
    }],
    last_query_time: '2018-03-30T11:33:18.212958Z',
  }, {
    id: 5,
    machines: [{
      id: 11,
      kind_of: 'WM',
      status: 0,
      message: null,
    }, {
      id: 12,
      kind_of: 'DR',
      status: 1,
      message: null,
    }],
    last_query_time: '2018-03-30T11:36:49.798297Z',
  }, {
    id: 7,
    machines: [{
      id: 4,
      kind_of: 'DR',
      status: 0,
      message: null,
    }, {
      id: 3,
      kind_of: 'WM',
      status: 0,
      message: null,
    }],
    last_query_time: '2018-03-30T11:39:22.197836Z',
  }, {
    id: 9,
    machines: [{
      id: 6,
      kind_of: 'WM',
      status: 0,
      message: null,
    }, {
      id: 7,
      kind_of: 'DR',
      status: 0,
      message: null,
    }],
    last_query_time: '2018-03-30T11:28:52.494066Z',
  }, {
    id: 10,
    machines: [{
      id: 17,
      kind_of: 'WM',
      status: 0,
      message: null,
    }],
    last_query_time: '2018-03-30T06:36:17.290806Z',
  }, {
    id: 11,
    machines: [{
      id: 10,
      kind_of: 'WM',
      status: 0,
      message: null,
    }, {
      id: 15,
      kind_of: 'DR',
      status: 0,
      message: null,
    }],
    last_query_time: '2018-03-30T10:58:00.138651Z',
  }, {
    id: 13,
    machines: [{
      id: 9,
      kind_of: 'WM',
      status: 0,
      message: null,
    }, {
      id: 13,
      kind_of: 'DR',
      status: 1,
      message: null,
    }],
    last_query_time: '2018-03-30T11:18:27.496809Z',
  }, {
    id: 15,
    machines: [{
      id: 5,
      kind_of: 'DR',
      status: 1,
      message: null,
    }, {
      id: 14,
      kind_of: 'WM',
      status: 0,
      message: null,
    }],
    last_query_time: '2018-03-29T16:33:09.513564Z',
  }, {
    id: 17,
    machines: [{
      id: 8,
      kind_of: 'DR',
      status: 1,
      message: null,
    }, {
      id: 16,
      kind_of: 'WM',
      status: 1,
      message: null,
    }],
    last_query_time: '2018-03-30T11:38:54.743775Z',
  }]

  dispatch({ type: GET_LAUNDRY_FLOORS, payload: floors })
}

export const subscribe = (floor, machine) => async (dispatch) => {
  dispatch({ type: SHOW_TOAST, payload: { floor, machine, status: 'warning' } })
}

export const hideToast = () => async (dispatch) => {
  dispatch({ type: HIDE_TOAST })
}
