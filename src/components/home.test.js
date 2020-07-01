import React from 'react'
import Home from './home.js'
// import Projects from ',/projects.js'
import profile from '../img/profile.png'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('hi, I\'m Alex Lewis renders', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toContainReact(<h2>Hi, I&#39;m Alex Lewis</h2>)
  })

  it('has profile image', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toContainReact(<img src={profile} alt="Alex Lewis"></img>)
  })
})

// describe('Projects', () => {
//   it('when clicked contains the projects element', () => {
//     const wrapper = shallow(<Home />)
//     const button = wrapper.find('#projects')
//     button.simulate('click')
//     expect(wrapper.find(Projects)).toHaveLength(1)
//   })
// })
