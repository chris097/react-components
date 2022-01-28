import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'analytics',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: '#fff',
      borderColor: '#1970A9',
      tension: 0.4
    },
  ],
};

const options = {
  plugins: { legend: { display: false}},
  scales: {
    y: {
      beginAtZero: true,
      display: false
    },
    x: {
      beginAtZero: true,
      display: false
    }
  }
};



const LineChart = () => {

  const [details, setDetails] = useState({
    fullName: "",
    email: ""
  })

  const onchangeHandler = (event) =>{
    setDetails({
      ...details,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler =(event)=>{
    event.preventDefault()
    console.log(details)
  }

  return (
    <>
      <div>
        appling line chart.
        <Line data={data} options={options} />
      </div>

      <form>
        <input type="text" name="fullName" value={details.name} onChange={onchangeHandler} placeholder="select name..." />
        <input type="email" name="email" value={details.email} onChange={onchangeHandler} placeholder="select name..." />
        <button type="submit" onClick={submitHandler}>sumbit</button>
      </form>
    </>

  )
}

export default LineChart



