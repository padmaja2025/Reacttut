import react from 'react';
import ReactDOM from 'react-dom';

const ProductList=()=> {
    
    let [products , setProducts] = useState([]);

    useEffect(
        ()=> {
            fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then()
        },
        []
    );

    return(
        <div>
           
        </div>
    );
}