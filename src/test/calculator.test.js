import React from 'react'
import Calculator from '../components/calculator'
import Button from '../modules/button'
import { shallow } from 'enzyme'

describe('Calculator component', () => {
  it('renders without crashing', () => {
    shallow(<Calculator />)
  })

  it('contains the top row of buttons', () =>{
    const wrapper = shallow(<Calculator />)
    const row = (
      <div className='calculator'>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </div>
    )

    expect(wrapper).toContainReact(row)
  })
})

