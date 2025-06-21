import react from 'react'
import reactDOM from 'react-dom'

const UserF = (props)=> {
    return(
        <div>
            <h3>UserName: {props.username}</h3>
            <h3> Email  : {props.email}</h3>
        </div>
    )
}
export default UserF;