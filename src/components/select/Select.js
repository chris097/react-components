import React, { useState } from 'react';

const data = [
  {id: 1, value: 'php'},
  {id: 2, value: 'frontend',},
  {id: 3, value: 'backend',},
]

const Select = () => {

  const [vals, setVal] = useState('');
  const [val1, setVal1] = useState('');
  
  return (
    <div>
      <select style={{ width: '300px', height: '30px'}} onChange={(e) => {
        setVal(e.target.value)
        console.log('vals',e.target.value)
      }}>
        {data?.filter(val => val.value !== val1).map((val) => (
        <option value={val.value}>{val.value}</option>
        ))}
      </select>
      <select style={{ width: '300px', height: '30px'}} onClick={(e) =>{
        setVal1(e.target.value)
        console.log('val1', e.target.value)
      }}>
        {data?.filter(val => val.value !== vals).map((val) => (
        <option value={val.value}>{val.value}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
