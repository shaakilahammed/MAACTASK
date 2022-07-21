import React from 'react';
import logo from '../../assets/images/FieldX.png';
import Button from '../UI/Button';
import classes from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className="container">
      <div className={classes.navBar}>
        <img src={logo} alt="FieldX Logo" />
        <div>
          <Button text="Login" />
          <Button text="Registration" type="btnOutline" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
