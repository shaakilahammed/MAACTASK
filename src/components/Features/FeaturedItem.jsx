import React from 'react';
import BoxIcon from '../UI/BoxIcon';
import classes from './FeaturedItem.module.scss';
const FeaturedItem = ({ heading, text, rightAlign = false }) => {
  return (
    <div
      className={`${classes.itemContainer} ${
        rightAlign && classes.itemContainerRight
      }`}
    >
      <div className={classes.iconContainer}>
        <BoxIcon />
      </div>
      <h2 className={classes.tertiaryHeading}>{heading}</h2>
      <p className={`${classes.text}  ${rightAlign && classes.textRight}`}>
        {text}
      </p>
    </div>
  );
};

export default FeaturedItem;
