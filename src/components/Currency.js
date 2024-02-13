import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";


function Currency(){
    const {dispatch,currency} = useContext(AppContext);
    const {newCurrency, setNewCurrency} = useState(currency);
    
    const handleChange = (event)=>{

        console.log(event.target.value);
    
        let curr = event.target.value.substring(0,1);
        console.log(curr);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr
        })

      }

    return (<>
        <select className={`alert alert-success`} onChange={(event)=>(handleChange(event))}>
             <option defaultValue value="£ Pound" name="£ Pound">£ Pound</option>
             <option value="€ Euro" name="€ Euro">€ Euro</option>
             <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
             <option value="$ Dollar" name="$ Dollar">$ Dollar</option>
        </select>
    </>)
}


export default Currency

