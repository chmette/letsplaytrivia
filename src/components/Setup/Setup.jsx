import React, {useState, useEffect} from 'react'

import Game from "../Game/Game"
import DifficultyRadio from './DifficultyRadio';
import AmountDropdown from './AmountDropdown';
import CategorySelect from "./CategorySelect";
import UserName from './UserName';



const Setup = () => {

//useStates  
 const [showGame, setShowGame] = useState(false);
 const [userName, setUserName] = useState('');
 const [radio, setRadio] = useState("easy");
 const [amount, setAmount] = useState('5')
 const [category, setCategory] = useState('9');
 const [data, setData] = useState([]);
 const [warningOne, setWarningOne] = useState(false);
 const [warningTwo, setWarningTwo] = useState(false);



// API 
  const URI = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${radio}&type=multiple`;

  useEffect(() => {
     async function fetchData() {
       try {
         const response = await fetch(URI);
         const data = await response.json();
         setData(data);
       } catch (error) {
         console.error(error.message);
       }
     };
    fetchData()
  }, [URI]);







  


  // Handlers

  // get Username
 const changeHandler = (e) => {
    setUserName(e.target.value);
  };

// show errors in setUpScreen
const clickhandler = () =>{
  if (data.response_code === 1) {
                setWarningOne(true);
                setWarningTwo(false);
              } else if (data.response_code === 0 && userName.length > 2) {
                setShowGame(true);
              } else {
                setWarningOne(false);
                setWarningTwo(true);
              }             
 }

//---------------------------
//Return Statement 
//---------------------------


  return (
    <section className="setup-container">
      {!showGame && (
       
          <section className="setup ">
            <h1 className="setup-header">Set Up Your Game</h1>
            <UserName
              userName={userName}
              changeHandler={changeHandler}
              required
            />
            <DifficultyRadio radio={radio} setRadio={setRadio} />
            <AmountDropdown amount={amount} setAmount={setAmount} />
            <CategorySelect category={category} setCategory={setCategory} />
            <button
            className="startGame"
            onClick={clickhandler}
            >
              Start Game
            </button>
            {warningOne ? 
              <h5>
                Some categories have limited amounts of questions, please reset!
              </h5> : <></>
            }
            {warningTwo && (
              <h5>You must enter a user name of minimum 3 characters!</h5>
            )}
          </section>
       
      )}
      {showGame && <Game data={data} userName={userName} />}
      {/* <div className='think-gif' style={{display: showGame ? 'none': 'block'}} ></div> */}
    </section>
  );
}

export default Setup