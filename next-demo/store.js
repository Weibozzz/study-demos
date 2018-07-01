import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  TEST_ASYNC: 'TEST_ASYNC'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        count: state.count + 1,
        res: action.res,
        light: !!action.light
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })
    default:
      return state
  }
}
// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({type: actionTypes.TICK, light: !isServer, ts: Date.now()})
}
export const serverRenderIncrementCount = (isServer,res) => dispatch => {

  return dispatch({
    type: actionTypes.INCREMENT,
    light: !isServer,
    res,
    ts: Date.now()
  })
}
export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({type: actionTypes.TICK, light: true, ts: Date.now()})
  }, 1000)
}

export const incrementCount = (dispatch, url) => {
  return axios.get(url).then(res => {
    exampleInitialState.res=res.data
    dispatch({type: actionTypes.INCREMENT, res: res.data, light: true, ts: Date.now()})
  })
}

export const decrementCount = () => dispatch => {
  return dispatch({type: actionTypes.DECREMENT})
}

export const resetCount = () => dispatch => {
  return dispatch({type: actionTypes.RESET})
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
