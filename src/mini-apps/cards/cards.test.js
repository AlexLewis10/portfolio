import React from 'react'
import Cards from './cards'
import { shallow } from 'enzyme'

describe('Cards component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Cards />)
    
    expect(wrapper).toContainReact(<h3>Cards</h3>)
  })
})