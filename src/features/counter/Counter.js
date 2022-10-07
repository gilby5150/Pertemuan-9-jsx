import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // Use Redux State and Actions in React Components
    return (
        <div className="container text-center">
            <div className='row'>
                <div className='col'>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                        aria-label="Increment value"
                        onClick={() => dispatch(decrement())}
                    >
                        <i class="bi bi-dash-circle-fill" />
                    </button>
                </div>
                <div className='col'>
                    <span>{count}</span>
                </div>
                <div className='col'>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-lg"
                        aria-label="Decrement value"
                        onClick={() => dispatch(increment())}
                    >
                        <i class="bi bi-plus-circle-fill" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Counter