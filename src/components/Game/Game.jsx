import React, {useRef, useState} from 'react';
import Question from "./Question";
import Evaluation from "./Evaluation";


const Game = ({ data, userName }) => {
  
  const res = data.results;
  const points = useRef(0);

  //useStates
  
  
  const [amountOfQuestionsLeft, setAmountOfQuestionsLeft] = useState(res.length);
  
  const [userAnswers, setUserAnswers] = useState([]);
  
 
// create questions from apiData

  const question = res.map((item,i) => {
    return <Question 
      key={i}
      category={item.category}
      question={item.question}
      answers={[...item.incorrect_answers, item.correct_answer]}
        solution={item.correct_answer}
        points={points}
        userName={userName}
      setAmountOfQuestionsLeft={setAmountOfQuestionsLeft}
      amountOfQuestionsLeft={amountOfQuestionsLeft}
      setUserAnswers={setUserAnswers}
      userAnswers={userAnswers}
    />
  })
  
  amountOfQuestionsLeft > 0 ? document.body.setAttribute("style", `position: fixed;`) : document.body.setAttribute("style", `position: none;`)

  
//---------------------------
//Return Statement 
//---------------------------

return (
  <div className='question-container' >
    {question}
    {amountOfQuestionsLeft === 0 && < Evaluation userName={userName} res={res} userAnswers={userAnswers} points={ points}/> }
    </div>
)}

export default Game 