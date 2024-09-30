import React from 'react'

const Introduction = () => {
  return (
    <>
      <div className='introductionCont'>
        <div className='introLeft'>
          <div className='introleftheading'>
            <h1>
              A one-stop location for <br />
              <span>integrated financial services.</span>
            </h1>
          </div>
          <div className='introleftPara'>
            <p>
              Send and receive money, get access to full loan, saving and other{' '}
              <br />
              financial services from different financial institutions across
              Nigeria.
            </p>
          </div>
          <div className='introleftButton'>
            <button>Learn More</button>
          </div>
        </div>
        <div className='introRight'>
          <img src='images/frame.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default Introduction
