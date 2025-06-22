import { CountContext } from "../Context/CounterContext";
import React,{useContext} from "react"

import react from "react";

const CompA = ()=> {
    const {count,increment} = useContext(CountContext);

    return(
        <div style={{marginBottom: "20px" , color:'blue'}}>
            <h3>Component A</h3>
            <p>Count : {count}</p>
            <button onClick={increment} >Click to increment</button>
        </div>
    );
}
export default CompA;
