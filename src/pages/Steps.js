import React from 'react'

const Steps = () => {
  return (
    <>
      <div className='stepContainer'>
        <div className='stepLeft'>
          <div className='stepLeftDiv1'>
            <button>HOW IT WPRKS</button>
          </div>
          <div className='stepLeftDiv2'>
            <h1>Get Started In 3 Simple Steps</h1>
          </div>
        </div>
        <div className='stepRight'>
          <div className='stepRightDiv1'>
            <div></div>
          </div>
          <div className='stepRightDiv2'>
            <div className='stepRightDiv2Div'>
              <h1>Create an account</h1>
              <p>
                Open a free account as an individual or institution in minutes
              </p>
            </div>
            <div className='stepRightDiv2Div'>
              <h1>Choose package</h1>
              <p>create an application package</p>
            </div>
            <div className='stepRightDiv2Div'>
              <h1>Enjoy</h1>
              <p>Enjoy your selected package</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Steps
