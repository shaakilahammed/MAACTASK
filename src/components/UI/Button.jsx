import React from 'react';
import classes from './Button.module.scss';
const Button = ({ text, type = 'btnFull' }) => {
  return (
    <button
      className={`${classes.btn} ${
        type === 'btnOutline' ? classes.btnOutline : classes.btnFull
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
