import logo from './logo.svg';
import './App.css';
import Timer from './Component/Timer/Timer';
import ProductF from './Component/Timer/ProductF';
import UserF from './Component/UserF';
import CompB from './Component/Timer/CompB';
import CompA from './Component/Timer/CompA';
import { CountContext} from './Component/Context/CounterContext';
import React ,{ useContext } from 'react';

function App() {

  let var1 = 95;

  const {count} = useContext(CountContext);

  return (
    <div className="App">
       <Timer></Timer>
       <CompA>

       </CompA>
       <CompB>

       </CompB>

       <h3> Global count : {count}</h3>
      <ProductF name="Frusitjuice" exportLimit={var1}></ProductF>
      <UserF username="JOHNSON" email="xyz@gmail.com"></UserF>
    </div>
  );
}

export default App;
