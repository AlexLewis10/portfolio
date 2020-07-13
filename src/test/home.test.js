import React from 'react'
import Home from '../components/home.js'
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
