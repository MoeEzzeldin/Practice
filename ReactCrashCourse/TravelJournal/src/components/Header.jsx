import { useState } from "react";
import TravelLogo from "../assets/travel-logo.png";
import Hello from "./Hello";

export default function Header() {

  const firstName = "Moe";
  const lastName = "Ezzeldin";
  let [inputField, setInputField] = useState("");
// binding data with React requires the use of state.
// it's equal to v-model in Vue.js, except that in React, we use the useState hook to create a state variable and a function to update it.
// the useState hook returns an array with two elements: the current state value and a function to update it.
  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const Hours = new Date().getHours();
  let timeOfDay;

  if (Hours < 12){
    timeOfDay = "Morning";
  }
  else if(Hours >= 12 && Hours < 17){
    timeOfDay = "Afternoon";
  }
  else if (Hours >= 17 && Hours < 24){
    timeOfDay = "Evening";
  }
  else{
    timeOfDay = "Night";
  }

return (
    <>
    <header>
      <nav className="header">
        <img src={TravelLogo} alt="Travel Journal Logo" className="travel-logo" />
        <span>Good {timeOfDay} {firstName} {lastName}</span>
        <input type="text" value={inputField} onChange={handleChange}/>
        {/* this is how you can pass data from UI to a component that's rendered in APP based on UI changes. */}
        {/* Make sure the component is Uppercase, and props is an arg in your child component */}
        <Hello name={inputField} />
      </nav>
    </header>
    </>
  );
}
