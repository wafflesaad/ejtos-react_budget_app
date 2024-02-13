import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget , currency} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    console.log("in Handle budget");
    if(event.target.value >= 20000){
      let x = document.getElementById("remaining").innerHTML
      alert("Budget cannot exceed remaining funds: " + x);
      return;
    }else if(event.target.value < Number(document.getElementById("spent").innerHTML.substring(1))){
      alert("You cannot reduce the budget value loewr than spending.");
      return;
    }
    setNewBudget(event.target.value);
  };
  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value="2000"
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
