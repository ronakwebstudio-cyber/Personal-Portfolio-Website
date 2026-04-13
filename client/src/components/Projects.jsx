import React, {useEffect, useState} from 'react'

export default function Projects(){
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('/api/projects')
      .then(r=>r.json())
      .then(data=> setProjects(Array.isArray(data) ? data : []))
      .catch(()=>{
        setProjects([
          { title: 'E-commerce Website', description: 'Responsive e-commerce UI built with HTML/CSS', link: '#' },
          { title: 'Weather App', description: 'Weather app using public APIs and JS', link: '#' }
        ])
      })
      .finally(()=> setLoading(false))
  },[])

  return (
    <section className="projects" id="projects">
      <h2 className="subtitle">My Projects</h2>
      <div className="project-card">
        {loading && <div>Loading projects…</div>}
        {!loading && projects.map((p,i)=>(
          <div className="project" key={i}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <a className="project-link" href={p.link || '#'} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  )
}
