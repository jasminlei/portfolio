import React, { useState } from 'react'
import { Github, Mail } from 'lucide-react'

const SocialLinks: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false)
  const [showGithub, setShowGithub] = useState(false)

  const toggleEmailVisibility = () => {
    setShowEmail((prev) => !prev)
  }

  const toggleGithubVisibility = () => {
    setShowGithub((prev) => !prev)
  }

  return (
    <div className='social-links'>
      <span
        onClick={toggleGithubVisibility}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <Github size={24} />
        {showGithub && (
          <a
            href='https://github.com/jasminlei'
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}
          >
            github.com/jasminlei
          </a>
        )}
      </span>
      <span
        onClick={toggleEmailVisibility}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <Mail size={24} />
        {showEmail && (
          <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>
            jasmin.leinonen@helsinki.fi
          </span>
        )}
      </span>
    </div>
  )
}

export default SocialLinks
