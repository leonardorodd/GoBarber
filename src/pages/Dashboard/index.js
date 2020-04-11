import React, { useState, useMemo, useEffect } from 'react';
import { getData } from '../../services/apifake';
import { format, subDays, addDays, setHours, setSeconds, setMinutes, setMilliseconds, isBefore, isEqual, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {

  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);
  
  const dateFormatted = useMemo(
    () => format(date, "iiii, d 'de' MMMM", { locale: pt }),
    [date] 
  )

  // function range(start, end) {
  //   return [...Array(++end).keys()].slice(start, end);
  // }

  useEffect(() => {
    async function loadSchedule() {
      // const response = await api.get('/schedule', {
      //   params: { date }
      // });

      const response = await getData(true, '/schedule', date);

      const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // get user timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const data = range.map(hour => {
        const checkDate = setMilliseconds(setSeconds(setMinutes(setHours(date, hour), 0), 0), 0);
        const zonedDate = utcToZonedTime(checkDate, timezone);
            
        response.find(time => console.log(`Date: ${parseISO(time.date)} \nZone: ${zonedDate} Result: ${isEqual(parseISO(time.date), zonedDate
          )}`));
        
        return {
          time: `${hour}:00h`,
          past: isBefore(zonedDate, new Date()),

          appointment: response.find(time => isEqual(parseISO(time.date), zonedDate)),
        };
      })
    
      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  console.log(schedule);

  return (
   <Container>
    <header>
      <button type="button" onClick={handlePrevDay}>
        <MdChevronLeft size={36} color="#FFF" />
      </button>
      <strong>{dateFormatted}</strong>
      <button type="button" onClick={handleNextDay}>
        <MdChevronRight size={36} color="#FFF"/>
      </button>
    </header>
    <ul>
      { schedule.map(time =>(
        <Time key={time.time} past={time.past} available={!time.appointment}>
         <strong>{time.time}</strong>
         <span>{time.appointment ? time.appointment.user.name : 'Em Aberto' }</span>
        </Time>
      )) }   
    </ul>
   </Container>
  );
}
