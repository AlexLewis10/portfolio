import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav id='mainNav'>   
      <a className='links' href='https://github.com/AlexLewis10/CV/raw/master/AlexLewisCV.pdf' download>CV</a>
      <a className='links' href='https://github.com/AlexLewis10/CV'>Github</a>
      <Link id='project-link' className='links' to='/projects'>Projects</Link>
      <a className='links' href='https://www.linkedin.com/in/alex-lewis-022761a8/'>LinkedIn</a>
      <a className='links' href='https://medium.com/@alexlewis374'>Medium</a>
      <a className='links' href='https://www.codewars.com/users/ALJALE'>CodeWars</a>
    </nav>
  )
}

export default Nav
