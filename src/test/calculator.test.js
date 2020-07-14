import React from 'react'
import Calculator from '../components/calculator'
import { shallow } from 'enzyme'

describe('Calculator component', () => {
  it('renders without crashing', () => {
    shallow(<Calculator />)
  })
})