import { legacy_createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useStore } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer from './reducers/anecdoteReducer.js'
import notificationReducer from './reducers/notificationReducer.js'
import filterReducer from './reducers/filterReducer.js'

const reducer = combineReducers({
    notification: notificationReducer,
    anecdotes: anecdoteReducer,
    filter: filterReducer,
})

const store = configureStore({ 
    reducer: {
      anecdotes: anecdoteReducer,
    },
  });

//console.log(store.getState())

/*const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)*/

export default store