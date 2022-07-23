import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import classes from './AdminLayout.module.scss';
const AdminLayout = ({ children }) => {
  return (
    <div className={classes.container}>
      <NavBar className={classes.nav} />
      <SideBar className={classes.sideBar} />
      <main className={classes.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
