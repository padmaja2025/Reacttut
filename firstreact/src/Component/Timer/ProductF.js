
function ProductF(props){

    return(
        <div>
            <h3> Product Info: </h3>
            <ul>
            <li> Name: {props.name}</li>
            <li> Export: {props.exportLimit}</li>
            <li> Export allowed : {props.exportLimit > 100 ? 'Limit exceded' : 'limit allowed' }</li>
            </ul>
        </div>
    )
}
export default ProductF;