import React from 'react'
import Projects from './projects'
import { shallow } from 'enzyme'

describe('Projects', () => {
  it('renders with the header projects', () => {
    const wrapper = shallow(<Projects />)

    expect(wrapper).toContainReact(<h2>Projects</h2>)
  })
})
