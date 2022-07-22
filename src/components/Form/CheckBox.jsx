import React from 'react';
import classes from './CheckBox.module.scss';

const CheckBox = () => {
  return (
    <div className={classes.checkBox}>
      <input type="checkbox" id="accept" />
      <label htmlFor="accept">
        I read and agree to the{' '}
        <a href="/" className={classes.link}>
          Terms & Conditions
        </a>
      </label>
    </div>
  );
};

export default CheckBox;
