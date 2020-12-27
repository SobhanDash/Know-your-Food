import React, { useState } from "react";
import "./styles.css";
import { fooddict } from "./emojidb";

// styling
const meaningStyle = {
  fontSize: "2rem",
  color: "blueviolet",
  padding: "1rem",
  display: "block",
  margin: "0.5rem auto",
  width: "70%",
  border: "none",
  borderRadius: "0.5rem",
  backgroundColor: "#212322"
};

const inputstyle = {
  display: "block",
  margin: "auto",
  padding: "1rem",
  width: "70%",
  backgroundColor: "#212322",
  border: "none",
  borderRadius: "0.5rem",
  color: "white",
  fontSize: "1.5rem"
};

const choice = {
  fontSize: "2rem",
  color: "green",
  padding: "0.5rem"
};

const cursor = {
  fontSize: "2.5rem",
  padding: "0.5rem",
  cursor: "pointer"
};

// accessing the keys from dictionary
var foodweknow = Object.keys(fooddict);

export default function App() {
  // state of meaning is initially empty  
  const [meaning, setmeaning] = useState("");
  //when item not selected index=-1
  const [emojiindex, setemojiindex] = useState(-1);

  // Input Handler
  function foodInputHandler(event) {
    var userInput = event.target.value;

    var meaning = fooddict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database";
      setemojiindex(-1);
    }
    setmeaning(meaning);
  }

  // Click Handler
  function foodClickHandler(input) {
    var meaning = fooddict[input];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know your Food!</h1>
      <h2> Select or Enter a food/drink emoji</h2>

      {/* Input Holder */}
      <input
        onChange={foodInputHandler}
        placeholder="Enter your emoji"
        style={inputstyle}
        type="text"
      />

      {/* Output Holder */}
      {emojiindex === -1 ? 
        (<h2 style={meaningStyle}> Meaning: {meaning} </h2>)
       : 
        (<h2 style={meaningStyle}> {choice} : {meaning} </h2>)
      }

      <div style={choice}> Click on your choice! </div>

      {/* displays all emojis */}
      {foodweknow.map(function (emoji) {
        return (
          // Action on click
          <span
            onClick={() => foodClickHandler(emoji)}
            style={cursor}
            key={emoji}>
              
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
