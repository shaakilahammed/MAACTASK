import React from 'react';
import logo from '../../../assets/images/FieldX.png';
import userImage from '../../../assets/images/user-img.png';
import Logout from '../../UI/Icons/Logout';
import classes from './NavBar.module.scss';
const NavBar = ({ className }) => {
  return (
    <nav className={className}>
      <div className={classes.navBar}>
        <img src={logo} alt="FieldX Logo" />
        <div className={classes.loginInfo}>
          <img src={userImage} alt="userImage" />
          <span className={classes.username}>Henry</span>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
