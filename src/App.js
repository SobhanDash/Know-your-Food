import React, { useState } from "react";
import "./styles.css";

const fooddict = {
  "🍈": "Melon",
  "🥑": "Avocado",
  "🍐": "Pear",
  "🍊": "Tangerine",
  "🥝": "Kiwi",
  "🥨": "Pretzel",
  "🍡": "Dango",
  "🧆": "Falafel",
  "🍙": "Rice ball",
  "🍢": "Oden"
};

var foodweknow = Object.keys(fooddict);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;

    var meaning = fooddict[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database";
    }
    setmeaning(meaning);
  }

  function foodClickHandler(input) {
    var meaning = fooddict[input];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem", color: "red" }}>Know your Food!</h1>
      <input
        onChange={foodInputHandler}
        style={{ height: "2rem", width: "60%", border: "1.5px solid black" }}
      />

      <div style={{ fontSize: "2rem", color: "blueviolet", padding: "0.5rem" }}>
        {" "}
        {meaning}{" "}
      </div>

      <div style={{ fontSize: "2rem", color: "green", padding: "0.5rem" }}>
        {" "}
        What we know{" "}
      </div>
      {foodweknow.map(function (emoji) {
        return (
          <span
            onClick={() => foodClickHandler(emoji)}
            style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
