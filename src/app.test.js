import React from 'react'
import App from 'app.js'
import { shallow } from 'enzyme'

describe('Renders', () => {
  it('hello world', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toHaveText('Hello World!')
  })
})
