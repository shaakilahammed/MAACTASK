import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../../assets/images/facebook.png';
import footerLogo from '../../assets/images/FieldX-white.png';
import linkedinLogo from '../../assets/images/linkedin.png';
import twitterLogo from '../../assets/images/twitter.png';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footerSection}>
      <div className="container">
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={footerLogo} alt="FieldX" />
          </Link>
        </div>
        <p className={classes.footerText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
        <div className={classes.socialIcons}>
          <Link to="/">
            <img src={twitterLogo} alt="twitterLogo" />
          </Link>
          <Link to="/">
            <img src={linkedinLogo} alt="linkedinLogo" />
          </Link>
          <Link to="/">
            <img src={facebookLogo} alt="facebookLogo" />
          </Link>
        </div>

        <div className={classes.separator}></div>

        <div className={classes.footerReserved}>
          <p className={classes.reserveText}>
            &copy; All rights reserve by{' '}
            <span className={classes.redText}>MAAC</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
