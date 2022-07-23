import React from 'react';
import LocationIcon from '../../UI/Icons/LocationIcon';
import classes from './SideBar.module.scss';

const SideBar = ({ className }) => {
  return (
    <div className={className}>
      <span className={classes.title}>MENU</span>
      <div className={classes.menuItem}>
        <LocationIcon />
        <span>Geo Information</span>
      </div>
      <div className={`${classes.menuItem} ${classes.active}`}>
        <div></div>
        <span>Region</span>
      </div>
      <div className={classes.menuItem}>
        <div></div>
        <span>Area</span>
      </div>
    </div>
  );
};

export default SideBar;
