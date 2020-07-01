import React from 'react'
import App from './app.js'
import profilepicmin from '../img/profilepicmin.png'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('hi, I\'m Alex Lewis renders', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>Hi, I&#39;m Alex Lewis</h2>)
  })

  it('has profilepic image', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<img src={profilepicmin} alt="Alex Lewis"></img>)
  })
})
