import React from 'react';

const DifficultyRadio = ({ radio, setRadio })=>{
    
    return (
      <section className="radio">
        <div className="multi-container">
          <label
            className={radio === "easy" ? "radio-chosen" : "radio-tochoose"}
            onClick={() => setRadio("easy")}
          >
            Easy
          </label>
          <input
            className="radioAnswer"
            type="radio"
            checked={radio === "easy"}
            value="easy"
            onChange={(e) => setRadio(e.target.value)}
          />
          <label
            className={radio === "medium" ? "radio-chosen" : "radio-tochoose"}
            onClick={() => setRadio("medium")}
          >
            Medium
          </label>
          <input
            className="radioAnswer"
            type="radio"
            checked={radio === "medium"}
            value="medium"
            onChange={(e) => setRadio(e.target.value)}
          />
          <label
            className={radio === "hard" ? "radio-chosen" : "radio-tochoose"}
            onClick={() => setRadio("hard")}
          >
            Hard
          </label>
          <input
            className="radioAnswer"
            type="radio"
            checked={radio === "hard"}
            value="hard"
            onChange={(e) => setRadio(e.target.value)}
          />
        </div>
      </section>
    );}

export default DifficultyRadio;