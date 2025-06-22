import React from "react";
import ReactDOM from "react-dom";

const ProductListF = (props)=>{

    let products= [{
        id: 1,
        name : "johnson",
        description:"johnson and johnson product",
        inStock: true
           
    },
{
     id: 2,
     name: "Milton",
     description:"milton product",
     inStock: true
},
{
      id: 3,
     name: "Milton",
     description:"milton product",
     inStock: false
}]
    return(
        <div>
          <h1> Product list </h1>

          <li>{products && products.map(prod => <td>{prod.name}</td>)}</li>
        </div>
    )
}