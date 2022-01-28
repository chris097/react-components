import React, { useState } from "react";
import Calendar from "react-calendar";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

<style>
  
</style>

const ReactCalendar = () => {

  const [date, setDate] = useState(true);

  const clickHandler = (e) => {
    console.log(moment(e.target.value).format("dddd"))
  }

  return (  
    <div>
      <div onClick={() => setDate(true)}>{moment(Date.now()).format('LL')}</div>
      {date && <CalendarComponent isMultiSelection={true} onChange={clickHandler} />} 
    </div>
  );
}
 
export default ReactCalendar;