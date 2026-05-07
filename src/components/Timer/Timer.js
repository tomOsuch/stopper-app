import styles from './Timer.module.scss';
import React from 'react';
import { useState, useRef } from 'react';
import FormattedTime from '../FormattedTime/FormattedTime';

const Timer = () => {
  const [time, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTimer(time => time + 1);
    }, 1);
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
  };

  return (
    <div>
      <header className={styles.header}>
          <h2 className={styles.title}>Timer</h2>
      </header>
      <section className={styles.timer}>
        <FormattedTime time={time} />
      </section>
      <section className={styles.buttons}>
        <button className={styles.button} onClick={startTimer}>Start</button>
        <button className={styles.button} onClick={stopTimer}>Stop</button>
        <button className={styles.button} onClick={resetTimer}>Reset</button>
      </section>
    </div>
  );
};

export default Timer;
