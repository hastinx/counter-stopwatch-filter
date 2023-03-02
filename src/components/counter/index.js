import React, { useState } from 'react'
import Navbar from '../navbar'
import Button from './button'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        count === 0 ? setCount(0) : setCount(count => count - 1)
    }
    return (
        <>
            <Navbar>
                <div className='card w-25'>
                    <div className='card-body d-flex justify-content-between align-items-center gap-5 mb-3'>
                        <Button fungsi='tambah' tambah={() => increment()} /> <span className='fs-1'>{count}</span> <Button fungsi='kurang' kurang={() => decrement()} />
                    </div>
                    <Button fungsi='reset' reset={() => setCount(0)} />
                </div>
            </Navbar>



        </>
    )
}

export default Counter