import React, { useRef } from 'react';
import { Rerousel } from 'rerousel'

const data = [
  {id: 1, name: "me"},
  {id: 1, name: "me"},
  {id: 1, name: "me"},
  {id: 1, name: "me"},
  {id: 1, name: "me"},
]

const RerouselFt = () => {

  const dataRef = useRef(null);

  return(
    <div>Rerousel feature..
      <div style={{display: 'flex', width: "100%"}}>
        <Rerousel itemRef={dataRef}>  
          {data?.map(c => (
            <div ref={dataRef} style={{border: '1px solid #eee', width: '200px', height: '200px'}}>{c.name}</div>
          ))}
        </Rerousel>
      </div>
    </div>
  )
}

export default RerouselFt;