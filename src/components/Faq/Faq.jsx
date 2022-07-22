import React from 'react';
import classes from './Faq.module.scss';
import Question from './Question';
const Faq = () => {
  return (
    <section className={classes.faqSection}>
      <div className="container">
        <span className={classes.subHeading}>Common Question </span>
        <h2 className={classes.secondaryHeading}>Frequently asked questions</h2>

        <div className={classes.questionsArea}>
          <Question
            question="What kind of data can I see in FieldX?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <Question
            question="How do you take payments?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <Question
            question="Does Bizzy read my customers' data?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <Question
            question="Can I also track website analytics on fieldX?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <Question
            question="What's your refund and cancellation policy?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
          <Question
            question="What makes Bizzy different from other analytics tools?"
            answer="Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
