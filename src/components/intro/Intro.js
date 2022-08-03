import React from 'react'
// import Container from '../container/Container'

import './Intro.css'

const IntroBlock = () => {
  return (
    <div className='introBlock'>
      {/* <Container size='small'> */}
      <h1 className='introBlockTitle'>
        <span>Digital marketing</span> services for your{' '}
        <span>online business</span>
      </h1>
      <a href='/' className='cta'>
        Get in touch
      </a>
      {/* </Container> */}
    </div>
  )
}

export default IntroBlock
