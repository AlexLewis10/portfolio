import React from 'react'
import App from './app.js'
import { shallow } from 'enzyme'

describe('Home', () => {
  it('Hi, I\'m Alex Lewis renders', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toContainReact(<h2>Hi, I&#39;m Alex Lewis</h2>)
  })
})
