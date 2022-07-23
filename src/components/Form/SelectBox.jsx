import React from 'react';
import classes from './SelectBox.module.scss';

const SelectBox = ({ title, options }) => {
  return (
    <select className={classes.inputBox}>
      <option value="" disabled>
        {title}
      </option>
      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
