import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ children }) => {

    const navigate = useNavigate()
    return (
        <>
            <div className='d-flex w-50 justify-content-between align-items-center' style={{ height: '100px' }}>
                <button className='btn btn-sm btn-primary' onClick={() => navigate('/counter')}>Counter</button>
                <button className='btn btn-sm btn-success' onClick={() => navigate('/stopwatch')}>Stopwatch</button>
                <button className='btn btn-sm btn-warning' onClick={() => navigate('/filter')}>Fruit Filter</button>
            </div>
            {children}
        </>

    )
}

export default Navbar