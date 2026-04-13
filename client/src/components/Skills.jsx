import React from 'react'

export default function Skills(){
  return (
    <section className="skills" id="skills">
      <h2 className="subtitle">Skills</h2>
      <div className="skill-card">
        <div className="card">
          <h3 className="sc-st">UI/UX Design</h3>
          <p className="sc-desc">Designing intuitive and user-friendly interfaces with a focus on simplicity and usability.</p>
        </div>
        <div className="card">
          <h3 className="sc-st">HTML & CSS</h3>
          <p className="sc-desc">Building clean, responsive, and structured web interfaces using modern HTML and CSS.</p>
        </div>
        <div className="card">
          <h3 className="sc-st">Coming Soon</h3>
          <p className="sc-desc">Currently expanding my skill set by learning new technologies and tools.</p>
        </div>
      </div>
    </section>
  )
}
