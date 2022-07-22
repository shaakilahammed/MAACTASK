import React, { useState } from 'react';
import DownArrow from '../UI/Icons/DownArrow';
import RightArrow from '../UI/Icons/RightArrow';
import classes from './Questions.module.scss';

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);
  const toggleQuestion = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={classes.questionContainer}>
      <div className={classes.questionHeader} onClick={toggleQuestion}>
        <p className={classes.question}>{question}</p>
        {toggle ? <DownArrow /> : <RightArrow />}
      </div>
      {toggle && (
        <div className={classes.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
