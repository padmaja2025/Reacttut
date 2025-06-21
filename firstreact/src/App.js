import logo from './logo.svg';
import './App.css';
import Timer from './Component/Timer/Timer';
import ProductF from './Component/Timer/ProductF';
import UserF from './Component/UserF';

function App() {

  let var1 = 95;
  return (
    <div className="App">
       <Timer></Timer>
      <ProductF name="Frusitjuice" exportLimit={var1}></ProductF>
      <UserF username="JOHNSON" email="xyz@gmail.com"></UserF>
    </div>
  );
}

export default App;
