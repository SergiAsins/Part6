import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import store from './store.js' 
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
//document.getElementById('root')

/*ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  ) */
