import React from 'react';
import Button from '../UI/Button';
import CheckBox from './CheckBox';
import classes from './RegistrationForm.module.scss';
import SelectBox from './SelectBox';
import TextInput from './TextInput';
const RegistrationForm = () => {
  return (
    <div className="container">
      <form className={classes.form}>
        <h2 className={classes.title}>Create Account</h2>
        <p className={classes.desc}>
          Fill in the details below to create an account
        </p>

        <TextInput type="text" placeholder="Enter Your Full Name" />
        <TextInput type="email" placeholder="Enter Your Email" />
        <TextInput type="text" placeholder="Your Mobile Number" />
        <TextInput type="password" placeholder="Password" />
        <TextInput type="password" placeholder="Confirm Password" />
        <SelectBox title="Select Your Role" options={['HUB']} />

        <CheckBox />

        <Button text="Create Account" bold className={classes.submitButton} />
        <p className={classes.signIn}>
          Already have an account?{' '}
          <a href="/login" className={classes.link}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
