import React from 'react'
import MiniApps from '../components/mini-apps'
import { shallow } from 'enzyme'

describe('MiniApps', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MiniApps />)

    expect(wrapper).toContainReact(<h2>Mini Apps</h2>)
  })
})
