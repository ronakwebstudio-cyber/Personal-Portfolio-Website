import React, {useState} from 'react'

export default function NavBar(){
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="nav-bar" role="navigation">
        <div className="logo">
          <a href="#home"><img src="/image/logo.png" alt="logo"/></a>
        </div>
        <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={`nav-links ${open? 'open':''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
