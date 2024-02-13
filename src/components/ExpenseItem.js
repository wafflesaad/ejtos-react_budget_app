import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch , currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const handleAllocation = (name, event) => {
        const expense = {
            name: name,
            cost: 10,
        };

        console.log(event.target.innerText);

        if(event.target.innerText == "+"){
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });
        }else{
            dispatch({
                type: "RED_EXPENSE" ,
                payload: expense
            })
        }

    }

    

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> handleAllocation(props.name, event)}>+</button></td>
        <td><button onClick={event=> handleAllocation(props.name, event)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
