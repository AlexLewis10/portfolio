import React from 'react'

function Nav () {
  return (
    <nav className='links'>      
      <a href='https://github.com/AlexLewis10/CV/raw/master/AlexLewisCV.pdf' download>CV</a>
      <a href='https://github.com/AlexLewis10/CV'>Github</a>
      <a href='https://www.linkedin.com/in/alex-lewis-022761a8/'>LinkedIn</a>
      <a href='https://medium.com/@alexlewis374'>Medium</a>
      <a href='https://www.codewars.com/users/ALJALE'>CodeWars</a>
      {/* <button id="projects" className="btn" onClick={this.sendToProjects}>Projects</button> */}
    </nav>
  )
}

export default Nav
