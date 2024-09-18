import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore } from 'redux'
import { legacy_createStore as createStore} from 'redux' // If you want to use createStore without this visual deprecation warning, use the legacy_createStore import instead
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <button onClick={() => store.dispatch({type: 'GOOD'})}>good</button> 
      <button onClick={() => store.dispatch({type: 'OK'})}>neutral</button>  
      <button onClick={() => store.dispatch({type: 'BAD'})}>bad</button>
      <button onClick={() => store.dispatch({type: 'ZERO'})}>reset stats</button>  
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

// En lugar de ReactDOM.render, usa createRoot
const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)