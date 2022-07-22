import React from 'react';
import amaraImage from '../../assets/images/Amara.png';
import avenImage from '../../assets/images/Aven.png';
import circleImage from '../../assets/images/Circle.png';
import kyanImage from '../../assets/images/Kyan.png';
import trevaImage from '../../assets/images/Treva.png';
import classes from './Teams.module.scss';

const Teams = () => {
  return (
    <section className={classes.teamsSection}>
      <div className="container">
        <span className={classes.subHeading}>
          5,000+ high-impact teams rely on Fieldx
        </span>
        <div className={classes.logoArea}>
          <img src={avenImage} alt="avenImage" />
          <img src={amaraImage} alt="amaraImage" />
          <img src={circleImage} alt="circleImage" />
          <img src={kyanImage} alt="kyanImage" />
          <img src={trevaImage} alt="trevaImage" />
        </div>
      </div>
    </section>
  );
};

export default Teams;
