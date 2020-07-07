import React from 'react'
import Nav from './nav'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

describe('Nav bar', () => {
  it('Contains a link to project path', () => {
    const projectLink = <Link id='project-link' className='links' to='/projects'>Projects</Link>
    const wrapper = shallow(<Nav />)

    expect(wrapper).toContainReact(projectLink)
  })
})