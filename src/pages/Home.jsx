import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Faq from '../components/Faq/Faq';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import NavBar from '../components/NavBar/NavBar';
import Teams from '../components/Teams/Teams';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <Hero />
        <Features />
        <AboutUs />
        <Faq />
        <Teams />
        <Footer />
      </div>
    </>
  );
};

export default Home;
