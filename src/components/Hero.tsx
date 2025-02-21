import SocialLinks from './SocialLinks'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1>
          <span>Hi, I'm </span>
          <span>
            Jasmin <span className='pumping-heart'>🖤</span>
          </span>
        </h1>
        <p>Student @ University of Helsinki, Computer Science</p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default Hero
