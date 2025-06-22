import { CountContext } from "../Context/CounterContext";
import React,{ useContext } from "react";

const CompB = ()=> {

    const {count, decrement}= useContext(CountContext);
    
    return(
        <div>
            <h3>Component B</h3>
            <p>Count : {count}</p>
            <button onClick = {decrement} >Click to Decrement </button>
        </div>
    );
}

export default CompB;