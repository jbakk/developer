import React from 'react'
// import Container from '../container/Container'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      {/* <Container> */}
        <div className='footerInner'>
          <p>&copy; Your Business {new Date().getFullYear()}</p>
          <p>
            <a href='/'>Made by you</a>
          </p>
        </div>
      {/* </Container> */}
    </footer>
  )
}

export default Footer
