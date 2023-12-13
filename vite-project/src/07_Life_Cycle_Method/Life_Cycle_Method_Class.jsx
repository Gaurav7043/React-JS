import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Unmount from "./Unmount";

export default class Life_Cycle_Method_Class extends Component {
    constructor(){
        super()
        console.log("------------------constructor--------->")
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log("-------------------componentDidMount--------->");
    }

    componentDidUpdate(){
        console.log("--------------componentDidUpdate------------------>");
    }
    
    render(){
        console.log("------------------render--------->")
        return(
            <div>
                {this.state.count < 5 ? <Unmount/> : null}
                <h1>Life_Cycle_Method_Class</h1>
                <h1>Count is {this.state.count}</h1>
                <Button color="danger" onClick={()=>this.setState({count : this.state.count + 1})}>Inc</Button>
            </div>
        )
    }
}
