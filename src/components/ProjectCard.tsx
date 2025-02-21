import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className='project-card'>
      <img
        src={image}
        alt={title}
        className='project-image'
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      <div className='project-content'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <div className='tech-tags'>
          {technologies.map((tech, index) => (
            <span key={index} className='tech-tag'>
              {tech}
            </span>
          ))}
        </div>
        <div className='project-links'>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link github'
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
