import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <main className="home-container">    
        <div className='start-gif'></div>
            <h1 className="start-heading" >It's Trivia Time Bitches!</h1>
        <Link to="Game">
          <button className='startGame'>Start Your Game </button>
        </Link>
      </main>
    );
}

export default Home
