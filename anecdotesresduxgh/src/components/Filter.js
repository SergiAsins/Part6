//import React from 'react'
import {useDispatch} from 'react-redux'
import {filterChange} from '../reducers/filterReducer.js'

const Filter = () => {
    const Dispatch = useDispatch()

    const handleChange = (event) => {
        Dispatch(filterChange(event.target.value))
    }
    const style = {
        marginBottom: 10
    }

    return(
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter