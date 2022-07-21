import React from 'react';
import phoneImage from '../../assets/images/phone-1.png';
import tabImage from '../../assets/images/tablet-1.png';
import Button from '../UI/Button';
import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <section>
      <div className="container">
        <h1 className={classes.heading}>
          Analytics that transform your product inside-out
        </h1>
        <div className={classes.cta}>
          <Button text="Request for Demo" bold />
          <Button text="Download" type="btnOutline" bold />
        </div>
        <div className={classes.heroImageArea}>
          <div className={classes.tabImage}>
            <img src={tabImage} alt="Tab " />
          </div>
          <div className={classes.phoneImage}>
            <img src={phoneImage} alt="Phone " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
