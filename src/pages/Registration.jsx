import React from 'react';
import Footer from '../components/Footer/Footer';
import RegistrationForm from '../components/Form/RegistrationForm';
import NavBar from '../components/NavBar/NavBar';
import classes from './Registration.module.scss';

const Registration = () => {
  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <RegistrationForm />
        <Footer />
      </div>
    </>
  );
};

export default Registration;
