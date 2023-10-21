import React from 'react'
import './Task04.css'

function Task04() {
  return (
    <div className='back1'>
        <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
            <h1 className='text-light'>Social Button</h1>
            <div>
                <button className='btn btn-warning'>Like</button><button className='btn btn-light mx-4'>Comments</button><button className='btn btn-primary'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Task04