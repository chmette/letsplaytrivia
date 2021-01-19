import React, { useState } from "react";


const Question = ({
  category,
  question,
  answers,
  solution,
  points,
  userName,
  setAmountOfQuestionsLeft,
  amountOfQuestionsLeft,
  setUserAnswers,
  userAnswers
}) => {


  //UseStates

  const [answer, setAnswer] = useState(answers.sort()[0]);

  //toggle to hide the Question go to the next one
  const [toggle, setToggle] = useState(false);


  // give/show answerOptions
  const choices = answers.sort().map((choice) => {
    return (
      <div className={answer === choice ? 'answer-success':'answer-container' } onClick={() => setAnswer(choice)}>
        <input
          className='radioAnswer'
          type="radio"
          checked={answer === choice}
          value={choice}
          onChange={() => setAnswer(choice)}
        />
        <label dangerouslySetInnerHTML={{ __html: choice }} />
      </div>
    );
  });

  // hide question, reduces amount of left questions, add points if right, set answer 
  const submitHandler = () => {
    setToggle(true);
    setAmountOfQuestionsLeft(amountOfQuestionsLeft -= 1)
    setUserAnswers([...userAnswers, answer]); 
    if (answer === solution) {
      points.current += 1;
    }
  };


//---------------------------
//Return Statement 
//---------------------------

  return (
     <>
        {!toggle && (
            <div className="question">
              <div className='question-heading'>
                <h4 dangerouslySetInnerHTML={{ __html: category }} />
                <h3 dangerouslySetInnerHTML={{ __html: question }} />
              </div>
              {choices}
              <button className="submitBtn" onClick={submitHandler}>
                Submit
              </button>
            </div>
        )}
     </>

  );
};

export default Question;
