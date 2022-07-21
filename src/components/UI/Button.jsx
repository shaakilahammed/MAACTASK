import React from 'react';
import classes from './Button.module.scss';
const Button = ({ text, type = 'btnFull', bold = false }) => {
  return (
    <button
      className={`${classes.btn} ${
        type === 'btnOutline' ? classes.btnOutline : classes.btnFull
      } ${bold && classes.bold}`}
    >
      {text}
    </button>
  );
};

export default Button;
