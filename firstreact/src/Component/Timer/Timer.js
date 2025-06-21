import react from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react';

class Timer extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            seconds : 0,
            maxSeconds:60 

        }
    }


    componentDidMount(){
        this.intervalid = setInterval(
            () => {
                this.setState(
                    currstate => ({seconds:currstate.seconds + 1 })
                    
                );
            },1000);
          }


    shouldComponentUpdate(nextProps,nextState){
       if(nextState.seconds < nextState.maxSeconds + 1)
        return true;
     else
        return false;
    }

    componentWillUnmount( ){
        clearInterval(this.intervalid);
    }

    render(){
        return(
            <div>
                <h1>Timer : {this.state.seconds}</h1>
                <button onClick={()=> this.setState({seconds:0})} >Reset</button>
            </div>
        );
    }
}

export default Timer;