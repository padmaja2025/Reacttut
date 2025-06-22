import { createContext ,useState} from "react";


export const CountContext = createContext();

export const CountProvider = ({children}) =>{
  
    let [count, setCount] = useState(1);

    const increment = ()=>
    {
        setCount(prevstate => prevstate+1);

    }

    const decrement =()=>{
        setCount(prevstate => prevstate-1);
    }

    return(
        <CountContext.Provider value={{count,increment,decrement}} >
            {children}
        </CountContext.Provider>
    )
}