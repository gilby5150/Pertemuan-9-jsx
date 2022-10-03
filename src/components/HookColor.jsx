import React, { useState } from "react";
import Clock from "./Clock";
// Create a function with hook
function HookColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color} !</h1>
      <div style={{display : 'flex'}}>
        <button type="button" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setColor("red")}>
          Red
        </button>
        <button type="button" onClick={() => setColor("green")}>
          Green
        </button>
        <button type="button" onClick={() => setColor("black")}>
          Black
        </button>
      </div>
      <Clock/>
    </>
  );
}

export default HookColor;
