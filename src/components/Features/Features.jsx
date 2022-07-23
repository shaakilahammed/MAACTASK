import React from 'react';
import featuredImage from '../../assets/images/central-phone-2.png';
import FeaturedItem from './FeaturedItem';
import classes from './Features.module.scss';
const Features = () => {
  return (
    <section className={classes.feturedSection}>
      <div className="container">
        <span className={classes.subHeading}>Products Features</span>
        <h2 className={classes.secondaryHeading}>Make more out of your data</h2>
        <div className={classes.featuresArea}>
          <div className={classes.leftFeaturesArea}>
            <FeaturedItem
              heading="Real-time analytics"
              text="See product usage, sign-ins, feature metrics change as users work on your."
              rightAlign
            />
            <FeaturedItem
              heading="Intuitive dashboard"
              text="See product usage, sign-ins, feature metrics change as users work on your."
              rightAlign
            />
            <FeaturedItem
              heading="Smart suggestions"
              text="See product usage, sign-ins, feature metrics change as users work on your."
              rightAlign
            />
          </div>
          <div className={classes.middleFeaturesArea}>
            <div className={classes.featuredImage}>
              <img src={featuredImage} alt="Featured" />
            </div>
          </div>
          <div className={classes.rightFeaturesArea}>
            <FeaturedItem
              heading="Multiple views"
              text="See product usage, sign-ins, feature metrics change as users work on your."
            />
            <FeaturedItem
              heading="AI-led diagnoses"
              text="See product usage, sign-ins, feature metrics change as users work on your."
            />
            <FeaturedItem
              heading="Responsive"
              text="See product usage, sign-ins, feature metrics change as users work on your."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
