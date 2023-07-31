import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

const DateTimeDisplay = ({ value, type }: { value: number; type: string }) => {
  return (
    <div className="timer-block">
      <p className="timer-block-value">{value < 10 ? `0${value}` : value}</p>
      <span className="timer-block-type">{type}</span>
    </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="timer-counter">
      <DateTimeDisplay value={days} type={'Days'} />
      <span className="timer-separator">:</span>
      <DateTimeDisplay value={hours} type={'Hours'} />
      <span className="timer-separator">:</span>
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <span className="timer-separator">:</span>
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

const Timer = ({ targetDate }: { targetDate: string }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  // const timerBody =
  //   days + hours + minutes + seconds <= 0 ? (
  //     <ExpiredNotice />
  //   ) : (
  //     <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
  //   );

  return (
    <div className="timer">
      <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
};

export default Timer;
