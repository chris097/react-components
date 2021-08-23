import React, { useState } from 'react';
import '../../components/carousel/style.css'

const data = [
  {
    id: 1,
    title: 'Name1',
    name: 'component1'
  },
  {
    id: 2,
    title: 'Name1',
    name: 'component2'
  },
  {
    id: 3,
    title: 'Name3',
    name: 'component3'
  },
]

const Carousel = () => {
  const [ current, setCurrent ] = useState(0);
  
  return (
    <div style={{ display: 'flex'}}>
      <div onClick={() => 
        current > 0 && setCurrent(current -1)}
        >left</div>
          {data?.map((el, index) => (
            current === index && <div style={{ backgroundColor: 'white', width: '200px', border: '2px solid #333', height: '100px',}}>{el.name}</div>
          ))}
      <div style={{ color: `${ current ? '#333' : 'red' }`}} onClick={() => 
        current < data.length -1 && setCurrent(current + 1)
      }>right</div>
    </div>
  )
};

export default Carousel;
