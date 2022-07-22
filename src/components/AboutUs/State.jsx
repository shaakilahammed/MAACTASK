import React from 'react';
import classes from './State.module.scss';

const State = ({ icon, text, count }) => {
  return (
    <div className={classes.stateContainer}>
      {icon}
      <span className={classes.count}>{count}</span>
      <span className={classes.text}>{text}</span>
      <span></span>
    </div>
  );
};

export default State;
