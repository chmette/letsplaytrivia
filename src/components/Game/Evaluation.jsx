import React from 'react';
import { Link } from "react-router-dom";

const Evaluation = ({ userName, res, userAnswers, points }) => {

    const compareResults = res.map((item, i) => {
        if (item.correct_answer === userAnswers[i]) {
            return (
              <div className="success show-results">
                <h3>
                  Question {i + 1} :{" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: item.question }}
                  ></span>
                </h3>
                <h4>Correct</h4>
                <h4>
                  User Answer = <span
                    dangerouslySetInnerHTML={{ __html: userAnswers[i] }}
                  ></span> : Correct Answer = <span
                    dangerouslySetInnerHTML={{ __html: item.correct_answer }}
                  ></span>{" "}
                </h4>
              </div>
            );
        } else {
            return (
              <div className="fail show-results">
                <h3>
                  Question {i + 1} : <span
                    dangerouslySetInnerHTML={{ __html: item.question }}
                  ></span>{" "}
                </h3>
                <h4>Wrong</h4>
                <h4>
                  User Answer = <span
                    dangerouslySetInnerHTML={{ __html: userAnswers[i] }}
                  ></span> : Correct Answer = <span
                    dangerouslySetInnerHTML={{ __html: item.correct_answer }}
                  ></span>
                </h4>
              </div>
            );
        }
    }) 
  

//---------------------------
//Return Statement 
//---------------------------
// {points.current > res.length / 2 ? successMemes.url : failMemes.url}
return (
  <section className="evaluation-container">
    <h2 className="evaluation-username">{userName}'s Result </h2>
    <h3
      className={
        points.current > res.length / 2
          ? "evaluation-score-green"
          : "evaluation-score-red"
      }
    >
      {points.current} / {res.length}
    </h3>
    <div className="eval-img">
      <img
        src={
          points.current > res.length / 2
            ? "https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif"
            : "https://media.giphy.com/media/xNRBrdEaYym76/giphy-downsized.gif"
        }
        alt=""
      />
    </div>
    {compareResults}
    <Link to="">
      <button className="submitBtn">New Game</button>
    </Link>
  </section>
);
}

export default Evaluation