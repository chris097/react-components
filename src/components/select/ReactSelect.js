import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ReactComponent as UkFlag } from '../../svgs/uk-flag.svg';
import ReactPlayer from 'react-player';

const animatedComponents = makeAnimated();

const options = [
  { value: <UkFlag />, label: <UkFlag /> },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export const ReactSelect = () => {
  // To deactive border
  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
    })
  }

  const [active, setIndex] = useState(1)

  const data = [
    {id: 1, name: 'foo'},
    {id: 2, name: 'foo'},
    {id: 3, name: 'foo'},
    {id: 4, name: 'foo'},
    {id: 5, name: 'foo'},
    {id: 6, name: 'foo'},
    {id: 7, name: 'foo'},
    {id: 8, name: 'foo'},
    {id: 9, name: 'foo'},
    {id: 10, name: 'foo'},
    {id: 11, name: 'foo'},
    {id: 12, name: 'foo'},
    {id: 13, name: 'foo'},
    {id: 14, name: 'foo'},
    {id: 15, name: 'foo'},
    {id: 16, name: 'foo'},
    {id: 17, name: 'foo'},
    {id: 18, name: 'foo'},
    {id: 19, name: 'foo'},
  ]

  const buttons = [
    'helo', 'see', 'rare'
  ]

  const clickHandler = (e) => {
    console.log(e.map(c => c.value))
  }
  return (
    <div style={{ width: '200px'}}>
      <Select 
        styles={style}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        isSearchable
        isClearable
        options={options}
        onChange={clickHandler}
      />
      {data?.map((el, index) => (
        <div>{index +1}</div>
      ))}

   {buttons.map(button => (
     <button style={{border: '1px solid #444', marginRight: "10px"}}>{button}</button>
   ))}


    </div>

  )
}
