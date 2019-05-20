import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducer'
import './config'
import Login from './views/login'
import Register from './views/register'
import AuthRoute from './components/authroute'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
))

ReactDom.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <AuthRoute></AuthRoute>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
