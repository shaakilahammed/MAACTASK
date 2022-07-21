import React from 'react';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
