import React from 'react'
import Calculator from '../components/calculator'
import Button from '../modules/button'
import { shallow } from 'enzyme'

describe('Calculator component', () => {
  it('renders without crashing', () => {
    shallow(<Calculator />)
  })

  it('contains all buttons', () =>{
    const wrapper = shallow(<Calculator />)
    const buttons = (
      <div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>X</Button>
        </div>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    )

    expect(wrapper).toContainReact(buttons)
  })
})

