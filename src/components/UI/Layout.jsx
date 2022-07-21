import React from 'react';
import NavBar from '../NavBar/NavBar';
import classes from './Layout.module.scss';
const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
