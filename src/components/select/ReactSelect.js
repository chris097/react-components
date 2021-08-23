import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ReactComponent as UkFlag } from '../../svgs/uk-flag.svg';

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
      />
    </div>
  )
}
