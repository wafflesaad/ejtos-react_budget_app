import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {

  const { expenses, budget, currency } = useContext(AppContext);
  
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  

  return (
    <div className={`alert ${alertType}`}  >
      <span>Remaining: <span id="remaining">{currency}{budget - totalExpenses}</span></span>
    </div>
  );
};

export default Remaining;
