import React from 'react'
import App from './app.js'
import Cv from './cv.js'
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
})

describe('CV', () => {
  it('clicking button displays the CV element', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('#cv')
    button.simulate('click')

    expect(wrapper.find(Cv)).toHaveLength(1)
  })

  it('if user does not click CV the CV element is not displayed', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Cv)).toHaveLength(0)
  })
})

describe('Home', () => {
  it('when CV is displayed, home button returns user to the home page', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('#cv')
    button.simulate('click')
    const homeButton = wrapper.find('#home')
    homeButton.simulate('click')

    expect(wrapper).not.toContainReact(<h3>CV</h3>)
  })
})

// it('returns the user to the home page', () => {
//   const wrapper = shallow(<App />)
//   const button = wrapper.find('#start')
//   button.simulate('click')
//   const homeButton = wrapper.find('#home')
//   homeButton.simulate('click')
//   expect(wrapper).toIncludeText('Start')
// })



