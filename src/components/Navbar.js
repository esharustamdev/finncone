import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='navContainer'>
        <div className='navMain'>
          <div className='navLogo'>
            <img src='images/finconne-blue.png' alt='' />
          </div>
          <div className='navLinks'>
            <ul>
              <li>
                <a href=''> Products</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
            </ul>
          </div>
          <div className='navButton'>
            <button>Get Started</button>
          </div>
          <div className='navIcon'>
            <i class='fa-solid fa-bars'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
