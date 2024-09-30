import React, { useState } from 'react'

const Faqs = () => {
  const [faqsDiv1, setfaqsDiv1] = useState(false)
  const faqsDiv1Func = () => {
    setfaqsDiv1(!faqsDiv1)
  }
  const [faqsDiv2, setfaqsDiv2] = useState(false)
  const faqsDiv2Func = () => {
    setfaqsDiv2(!faqsDiv2)
  }
  const [faqsDiv3, setfaqsDiv3] = useState(false)
  const faqsDiv3Func = () => {
    setfaqsDiv3(!faqsDiv3)
  }
  const [faqsDiv4, setfaqsDiv4] = useState(false)
  const faqsDiv4Func = () => {
    setfaqsDiv4(!faqsDiv4)
  }
  const [faqsDiv5, setfaqsDiv5] = useState(false)
  const faqsDiv5Func = () => {
    setfaqsDiv5(!faqsDiv5)
  }
  const [faqsDiv6, setfaqsDiv6] = useState(false)
  const faqsDiv6Func = () => {
    setfaqsDiv6(!faqsDiv6)
  }
  return (
    <>
      <div className='faqsContainer'>
        <div className='faqsHeading'>
          <h2>FAQ</h2>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className='faqsMain'>
          <div className={faqsDiv1 ? 'faqsDiv1Sub' : 'faqsDiv1'}>
            <p>What is your favorite template from BRIX Templates?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv1Func}></i>
          </div>

          <div className={faqsDiv1 ? 'faqsDiv1Sub active' : 'faqsDiv1Sub'}>
            <div className='faqsDiv1SubAns'>
              <p>What is your favorite template from BRIX Templates?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv1Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>

          <hr />
          <div className={faqsDiv2 ? 'faqsDiv2Sub' : 'faqsDiv1'}>
            <p>How do you clone a template from the Showcase?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv2Func}></i>
          </div>
          <div className={faqsDiv2 ? 'faqsDiv2Sub active' : 'faqsDiv2Sub'}>
            <div className='faqsDiv2SubAns'>
              <p>How do you clone a template from the Showcase?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv2Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>
          <hr />
          <div className={faqsDiv3 ? 'faqsDiv3Sub' : 'faqsDiv1'}>
            <p>What is Webflow and why is it the best website builder?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv3Func}></i>
          </div>
          <div className={faqsDiv3 ? 'faqsDiv3Sub active' : 'faqsDiv3Sub'}>
            <div className='faqsDiv3SubAns'>
              <p>How do you clone a template from the Showcase?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv3Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>
          <hr />
          <div className={faqsDiv4 ? 'faqsDiv4Sub' : 'faqsDiv1'}>
            <p>Why is BRIX Templates the best Webflow agency?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv4Func}></i>
          </div>
          <div className={faqsDiv4 ? 'faqsDiv4Sub active' : 'faqsDiv4Sub'}>
            <div className='faqsDiv4SubAns'>
              <p>How do you clone a template from the Showcase?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv4Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>
          <hr />
          <div className={faqsDiv5 ? 'faqsDiv5Sub' : 'faqsDiv1'}>
            <p>When was Webflow officially launched?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv5Func}></i>
          </div>
          <div className={faqsDiv5 ? 'faqsDiv5Sub active' : 'faqsDiv5Sub'}>
            <div className='faqsDiv5SubAns'>
              <p>How do you clone a template from the Showcase?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv5Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>
          <hr />
          <div className={faqsDiv6 ? 'faqsDiv6Sub' : 'faqsDiv1'}>
            <p>How do you integrate Jetboost with Webflow?</p>
            <i class='fa-solid fa-plus' onClick={faqsDiv6Func}></i>
          </div>
          <div className={faqsDiv6 ? 'faqsDiv6Sub active' : 'faqsDiv6Sub'}>
            <div className='faqsDiv6SubAns'>
              <p>How do you clone a template from the Showcase?</p>
              <i class='fa-solid fa-minus' onClick={faqsDiv6Func}></i>
            </div>
            <p>Answer to question 1</p>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Faqs
