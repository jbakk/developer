import React from 'react'
// import Container from '../container/Container'

import './Hero.css'

const FeaturedImage = () => {
  return (
    <div className='featuredImage'>
      {/* <Container size='medium'> */}
      <img
        src='https://images.unsplash.com/photo-1573488693582-260a6f1a51c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80'
        alt='hero'
      />
      {/* </Container> */}
    </div>
  )
}

export default FeaturedImage
