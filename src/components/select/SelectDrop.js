import React, { useState } from 'react';
import UK from '../../images/UK.png';
import NG from '../../images/NG.png';

const data = [
  { id: 1, icons: UK },
  { id: 2, icons: NG }
]

export const SelectDrop = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ show, setShow ] = useState('');

  const toggleOption = () => setShow((open)=> !open)

  return (
    <div>
      <div style={{background: '#fff', border: '1px solid #333', width: '100px'}}>
      <div onClick={toggleOption} style={{ border: '1px solid #333'}}>
        <img src={data[currentIndex].icons} alt="" />
        <span>{!show ? 'open' : 'close'}</span>
      </div>
        { show &&
          data?.map((icon, index) => (
            <>
            <div onClick={() => {
              setCurrentIndex(index)
            }}>
            <img src={icon.icons} alt="" />
          </div>
            </>
          ))
        }
      </div>   
    </div>
  )
}

