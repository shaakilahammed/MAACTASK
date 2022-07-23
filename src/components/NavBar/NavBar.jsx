import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/FieldX.png';
import Button from '../UI/Button';
import classes from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className={classes.navBar}>
          <Link to="/">
            <img src={logo} alt="FieldX Logo" />
          </Link>
          <div>
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/register">
              <Button text="Registration" type="btnOutline" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
