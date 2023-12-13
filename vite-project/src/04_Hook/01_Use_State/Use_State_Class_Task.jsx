import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class Use_State_Class_Task extends Component {
    constructor(props){
        super(props);
        this.color_arr = ["white", "red", "green", "yellow", "pink", "orange", "orangered"]
        this.state = {
            index : 0,
            d : false
        };
    }

    increntHandle = () =>{
        let  {index, d} = this.state
        if(this.color_arr.length - 1 > index || d){
            this.setState({index : index + 1})
        }else{
            const isContinue = confirm("want to continue...?")
            if(!isContinue) this.setState({index: 0})
            else this.setState({index: index + 1, d: true})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.d.toString()}</h1>
                <div style={{display: "grid", placeContent: "center"}}>
                    <h1>index is {this.state.index}</h1>
                    <div style={{
                        height: "300px",
                        width: "300px",
                        display: "grid",
                        placeContent: "center",
                        textAlign: "center",
                        padding: "30px 0px",
                        marginBottom: "20px",
                        backgroundColor: this.color_arr[this?.state?.index >= this?.color_arr?.length ? this?.color_arr?.length - 1 : this?.state?.index]
                        }}>
                        Hello World
                    </div>
                </div>
                <Button color="danger" onClick={this.increntHandle}>Change Color</Button>
            </div>
        )
    }
}
