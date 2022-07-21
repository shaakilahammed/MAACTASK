import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <Hero />
        <Features />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
