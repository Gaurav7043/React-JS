import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Life_Cycle_Project extends Component {
    constructor(){
        super()
        this.state={
            color: "black",
            count: 0,
        }
    }

    increment_count(){
        this.setState({count: this.state.count + 1})
    }

    componentDidUpdate(pre_props, pre_state){
        if(this.state.count === 5 && pre_state.color != "red"){
            alert("color is change")
            this.setState({color: "red"})
        }
    }

    render() {
        return (
            <>
                <h1 style={{color: this.state.color}}>Count is {this.state.count}</h1>
                <Button onClick={()=>this.increment_count()}>Inrement</Button>
            </>
        )
    }
}
