import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footerCont'>
        <div className='footerImg'>
          <img src='images/bgimg.png' alt='' />
        </div>
        <div className='footerImgCont'>
          <img src='images/bgimg2.png' alt='' />
        </div>
        <div className='footerImgPara'>
          <div className='footerImgParaMain'>
            <h1>Become an Agent</h1>
            <p>You can join us on our mission</p>
            <div className='footerImgParaBtn'>
              <input type='text' placeholder='Enter Your email address' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='footerBottom'>
          <div className='footerBottomDiv1'>
            <img src='images/finconne-blue.png' alt='' />
            <p>Lagos, Nigeria.</p>
            <div className='footerBottmTimigs'>
              <h2>Open Hours</h2>
              <p>Mon - Sat: 8am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className='footerBottomDiv1'>
            <h1>Links</h1>
            <div className='footerBottomDiv1Links'>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Home</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Team</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Career</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Our Products</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Contact</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>About Us</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Blogs</h3>
              </div>
              <div className='footerBottomDiv1Link'>
                <i class='fa-solid fa-angle-right'></i>
                <h3>Testimonials</h3>
              </div>
            </div>
          </div>
          <div className='footerBottomDiv1'>
            <h1>Newsletter</h1>
            <p>Send us a newsletter to get update</p>
            <div className='footerBottomDiv1Input'>
              <input type='text' placeholder='Enter Your Email Address' />
              <button>
                <i class='fa-solid fa-arrow-up-right-from-square'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='footerBottomFinal'>
          <p>
            Copyright <span>FinCONNE</span> 2024 All Right Reserved
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
