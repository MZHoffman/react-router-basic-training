import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1></h1>My Home Page
      <p>
        Go to <Link to='/products'> the list of products</Link>.
      </p>
    </>
  )
}

export default HomePage
