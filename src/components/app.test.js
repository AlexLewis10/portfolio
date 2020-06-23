import React from 'react'
import App from './app.js'
import profilepic from '../img/profilepic.jpg'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('hi, I\'m Alex Lewis renders', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>Hi, I&#39;m Alex Lewis</h2>)
  })

  it('has profilepic image', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<img src={profilepic} alt="Alex Lewis"></img>)
  })

  it('clicking CV button displays the CV', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('#cv')
    button.simulate('click')

    expect(wrapper).toContainReact(<div><h3>CV</h3></div>)
  })
})
