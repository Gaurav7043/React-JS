import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Use_State_Class extends Component {
    constructor(){
        super();
        this.state = {
            count : 1000,
        }; // set only null & object value in state
    }

    increntHandle(){
        console.log("----->");
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>Use_State_Class</h1>
                <h1>count is {this.state.count}</h1>
                <Button color="danger" onClick={()=>this.increntHandle()}>Inc</Button>
            </div>
        )
    }
}
