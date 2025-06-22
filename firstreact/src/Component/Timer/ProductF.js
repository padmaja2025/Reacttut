import { useState } from "react";

function ProductF(props){
        
let [quantity, setQuantity] = useState(1)

const f = ()=>{
    console.log('insdie f()');
    setQuantity(5);
}
   
    return(
        <div>
            <h3> Product Info: </h3>
            <ul>
            <li> Name: {props.name}</li>
            <li> Export: {props.exportLimit}</li>
            <li> Export allowed : {props.exportLimit > 100 ? 'Limit exceded' : 'limit allowed' }</li>
            <li> Quantity : {quantity}</li>
           <li><button onClick={f}> Click me to increment</button></li> 
            </ul>
        </div>
    )
}
export default ProductF;