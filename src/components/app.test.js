import React from 'react'
import App from './app.js'
import profilepic from '../img/profilepic.jpg'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('Hi, I\'m Alex Lewis renders', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>Hi, I&#39;m Alex Lewis</h2>)
  })

  it('Has profilepic image', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<img src={profilepic} alt="Picture of Alex Lewis"></img>)
  })
})
