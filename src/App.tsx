import React from 'react'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import project1Image from './assets/project_1.png'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

function App() {
  const projects: Project[] = [
    {
      title: 'FrogQuiz',
      description:
        'Play coding quizzes, get roasted by a frog, and earn a certificate!',
      image: project1Image,
      technologies: ['React', 'Node.js/Express', 'PostgreSQL'],
      liveUrl: 'https://frogquiz.fly.dev/',
      githubUrl: 'https://github.com/jasminlei/froquiz',
    },
  ]

  return (
    <div className='App'>
      <Hero />
      <section id='projects' className='projects'>
        <div className='container'>
          <h2 className='section-title'>My projects</h2>
          <div className='projects-grid'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
