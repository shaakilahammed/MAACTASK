import React from 'react';
import Footer from '../components/Footer/Footer';
import LoginForm from '../components/Form/LoginForm';
import NavBar from '../components/NavBar/NavBar';
import classes from './Login.module.scss';

const Login = () => {
  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <LoginForm />
        <Footer />
      </div>
    </>
  );
};

export default Login;
