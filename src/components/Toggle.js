import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)
  const handleClick = () => setIsOn(isOn = !isOn)
  const color = isOn ? "red" : "white"

  return (
  <button onClick={handleClick} style={{ background: color }}>
    {isOn ? "ON" : "OFF"}
  </button>
  )
}

export default Toggle;
