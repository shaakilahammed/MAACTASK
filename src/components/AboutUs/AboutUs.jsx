import React from 'react';
import ceoImage from '../../assets/images/ceo.png';
import chartImage from '../../assets/images/chart.png';
import orderVsDeliveryImage from '../../assets/images/order-delivery.png';
import topSellingImage from '../../assets/images/top-selling.png';
import classes from './AboutUs.module.scss';
const AboutUs = () => {
  return (
    <section className={classes.aboutUsSection}>
      <div className="container">
        <div className={classes.aboutUsContainer}>
          <div className={classes.aboutUsImage}>
            <div className={classes.orderVsDelivery}>
              <img src={orderVsDeliveryImage} alt="orderVsDeliveryImage" />
            </div>
            <div className={classes.topSelling}>
              <img src={topSellingImage} alt="topSellingImage" />
            </div>
            <div className={classes.chart}>
              <img src={chartImage} alt="chartImage" />
            </div>
          </div>
          <div className={classes.aboutUsDetails}>
            <span className={classes.subHeading}>About Us</span>
            <h2 className={classes.secondaryHeading}>
              A dedicated solution for startups and enterprises
            </h2>
            <p className={classes.aboutUsText}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className={classes.ceoTestimony}>
              <img src={ceoImage} alt="CEO, Fieldx" />
              <div className={classes.ceoDetails}>
                <p className={classes.ceoMessage}>
                  "Fieldx is for teams that care about their product growth."
                </p>
                <span className={classes.ceoName}>CEO, FieldX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
