import React from 'react'

const Features = () => {
  return (
    <>
      <div className='featuresCont'>
        <div className='featureHeading'>
          <h2>What we offer</h2>
          <h1>Unique features by FinCONNE</h1>
        </div>
        <div className='featureDiv'>
          <div className='featureDiv1'>
            <h1>Free sign up</h1>
            <p>
              Open a free account as an individual or institution in minutes.
            </p>
            <button>Sign up now</button>
          </div>
          <div className='featureDiv1'>
            <h1>Savings & secure payment.</h1>
            <p>
              Save money with rest of mind and have access to swift and secure
              payment
            </p>
            <button>Sign up now</button>
          </div>
          <div className='featureDiv1'>
            <h1>Automated group contribution</h1>
            <p>
              As an individual (Civil Servant, students, etc) you have
              opportunities to organize group contributions which will be fully
              automated with decentralized wallet solution. Read more
            </p>
            <button>Read More</button>
          </div>
          <div className='featureDiv1'>
            <h1>Easy access to loans.</h1>
            <p>
              Get access to quick capital and personal loans from our available
              financial institutions with friendly interest rate.
            </p>
            <button>Get a Loan</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
