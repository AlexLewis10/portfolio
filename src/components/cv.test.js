import React from 'react'
import Cv from './cv.js'
import { shallow } from 'enzyme'

describe('CV', () => {
  it('displays the header', () => {
    const wrapper = shallow(<Cv />)

    expect(wrapper).toContainReact(<h3>CV</h3>)
  })
})
