import {useEffect} from 'react'
import NewAnecdote from './components/anecdoteForm.js'
import AnecdoteList from './components/anecdoteList.js'
import Notification from './components/Notification.js'
import Filter from './components/Filter.js'
import { useDispatch, useSelector } from 'react-redux'
import initializeAnecdotes from './reducers/anecdoteReducer.js';

import { Provider } from 'react-redux' //ex

const App = () => {
  const dispatch = useDispatch()
  //const anecdotes = useSelector(state => state) //posible error
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

return (
    <div>
      <h2>create new</h2>
      <NewAnecdote />
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App