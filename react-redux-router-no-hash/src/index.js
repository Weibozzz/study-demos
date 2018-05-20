import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers
import About from './components/about'
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={() => (<h1>Home <Link to="/about">index</Link></h1>)}/>
                <Route path="/about" component={() => (<About s={23} />)}/>
                {/*<Route path="/topics" component={() => (<h1>Home <Link to="/topics">topics</Link></h1>)}/>*/}
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)