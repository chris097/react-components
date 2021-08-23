import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: "Jun",
    uv: 4000,
  },
  {
    name: "Jul",
    uv: 3000,
  },
  {
    name: "Aug",
    uv: 2000,
  },
  {
    name: "Sep",
    uv: 2780,
  },
  {
    name: "Oct",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Dec",
    uv: 4390,
    pv: 3800,
    amt: 2500
  },
];

const ChartBar = () => {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      cx={100}
      cy={100}
      margin={{
        top: 10,
        right: 30,
        left: 100,
        bottom: 0
      }}
    >
      <XAxis dataKey="name" 
        allowDuplicatedCategory={false}  
        tickLine={false}
        orientation="bottom"
        axisLine={false}
       />
      <Tooltip cursor={false} />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" dot={{ stroke: 'red', fill: 'red', strokeWidth: 1, r: 4,strokeDasharray:''}} />
    </AreaChart>
  )
}

export default ChartBar;