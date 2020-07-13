import React from 'react'
import Projects from '../components/projects'
import { shallow } from 'enzyme'

describe('Projects', () => {
  it('renders with the header projects', () => {
    const wrapper = shallow(<Projects />)

    expect(wrapper).toContainReact(<h2>Projects</h2>)
  })
})

describe('User can return to home', () => {
  it('clicking on home button returns user to page with path "/"', () => {
    const wrapper = shallow(<Projects />)
    const button = wrapper.find('#home')
    button.simulate('click')
  
    expect(location.pathname).toBe("/") 
  })
})
