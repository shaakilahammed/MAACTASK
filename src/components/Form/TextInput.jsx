import React from 'react';
import classes from './TextInput.module.scss';
const TextInput = ({ type, placeholder }) => {
  return (
    <input type={type} className={classes.inputBox} placeholder={placeholder} />
  );
};

export default TextInput;
