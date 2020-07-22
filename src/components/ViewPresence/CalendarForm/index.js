import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const CalendarForm = () => {
  const [date, setDate] = useState(new Date())
  const getDate = date =>{
    setDate(date)
    console.log(date)
  }
  useEffect(() => {
console.log(date)
    
  }, [])
  return (
  <div className="col-md-2 calendar" >
      <Calendar
        onChange={getDate}
        value={date}
        nextAriaLabel='aria-label'
      />
  </div>
  )
}

export default CalendarForm
