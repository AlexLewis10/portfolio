import React from 'react'
import Nav from './nav'
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme'

describe('Nav bar', () => {
  it('Contains a link to project path', () => {
    const wrapper = shallow(<Nav />)
    const projectLink = <Link id='projects' className='links' to='/projects'>Projects</Link>

    expect(wrapper.containsMatchingElement(projectLink)).toEqual(true)
  })
})

