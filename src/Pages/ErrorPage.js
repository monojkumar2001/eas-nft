import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <section className='error-page'>
      <div className="container">
        <div className="error-page-wrapper">
          <h2 className='section-title'>404</h2>
          <h4>Page Not Found</h4>
          <p>The page you're looking for does not seem to exist</p>
          <Link to={"/"} className='custom-btn'>Go to Home</Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default ErrorPage