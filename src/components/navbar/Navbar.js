import React from 'react'
// import Container from '../container/Container'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <Container> */}
      <div className='navbarInner'>
        <div className='navbarLeft'>
          <a href='https://johnkgomez.com/' className='logo'>
            Developers
          </a>
          <ul className='list'>
            <li className='listItem'>
              <a href='https://johnkgomez.com/'>About</a>
            </li>
            <li className='listItem'>
              <a href='https://johnkgomez.com/'>Solutions</a>
            </li>
            <li className='listItem'>
              <a href='https://johnkgomez.com/'>Work</a>
            </li>
          </ul>
        </div>
        <a href='https://johnkgomez.com/' className='cta'>
          Contact
        </a>
      </div>
      {/* </Container> */}
    </div>
  )
}

export default Navbar
