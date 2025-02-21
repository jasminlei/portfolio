import React, { useState } from 'react'
import SocialLinks from './SocialLinks'

const Hero: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false)
  const toggleEmailVisibility = () => {
    setShowEmail((prev) => !prev)
  }

  return (
    <section className='hero'>
      <div className='container'>
        <h1>
          <span>Hi, I'm </span>
          <span>
            Jasmin <span className='pumping-heart'>💜</span>
          </span>
        </h1>
        <p>Student @ University of Helsinki, Computer Science</p>
        <SocialLinks
          showEmail={showEmail}
          toggleEmailVisibility={toggleEmailVisibility}
        />
      </div>
    </section>
  )
}

export default Hero
