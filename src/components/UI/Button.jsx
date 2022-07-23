import React from 'react';
import classes from './Button.module.scss';
const Button = ({ text, type = 'btnFull', bold = false, className }) => {
  return (
    <button
      className={`${classes.btn} ${
        type === 'btnOutline' ? classes.btnOutline : classes.btnFull
      } ${bold && classes.bold} ${className && className}`}
    >
      {text}
    </button>
  );
};

export default Button;
