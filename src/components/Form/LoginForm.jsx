import React from 'react';
import Button from '../UI/Button';
import classes from './LoginForm.module.scss';
import TextInput from './TextInput';
const LoginForm = () => {
  return (
    <div className="container">
      <form className={classes.form}>
        <h2 className={classes.title}>Welcome Back!</h2>
        <p className={classes.desc}>Please login to your account</p>

        <TextInput type="email" placeholder="Enter Your Email" />
        <TextInput type="password" placeholder="Password" />

        <Button text="Sign In" bold className={classes.submitButton} />
        <p className={classes.signIn}>
          Don’t have any account?
          <a href="/register" className={classes.link}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
