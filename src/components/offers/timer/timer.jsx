import React, { useState, useEffect, useMemo } from 'react';
import './timer.css'

const Timer = () => {
  const calculateTimeLeft = (targetDate) => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    date.setHours(date.getHours() + 4);
    date.setMinutes(date.getMinutes() + 3);
    date.setSeconds(date.getSeconds() + 30);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className='timer_container'>

      <div className='deal'>
        <span className='dealspan'>Deals and offers</span>
        <span className='hygienespan'>Hygiene equipments</span>
      </div>

      <div className='timer'>
        {/* <div className='timer1'>
          <span className='daystimer'>{timeLeft.days} </span>
          <span className='timingspan'>days</span>
        </div> */}
        <div className='timer1'>
          <span className='daystimer'>{timeLeft.hours} </span>
          <span className='timingspan'>hour</span>
        </div>
        <div className='timer1'>
          <span className='daystimer'>{timeLeft.minutes}</span>
          <span className='timingspan'>min</span>
        </div>
        <div className='timer1'>
          <span className='daystimer'>{timeLeft.seconds}</span>
          <span className='timingspan'>sec</span>
        </div>
      </div>

    </div>
  );
};

export default Timer;
