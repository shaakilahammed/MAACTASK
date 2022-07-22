import React from 'react';
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
          <img src={footerLogo} alt="FieldX" />
        </div>
        <p className={classes.footerText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
        <div className={classes.socialIcons}>
          <img src={twitterLogo} alt="twitterLogo" />
          <img src={linkedinLogo} alt="linkedinLogo" />
          <img src={facebookLogo} alt="facebookLogo" />
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
