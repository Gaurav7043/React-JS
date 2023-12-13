import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        console.log("-------------componentWillUnmount-------------->")
        alert("component is removing now")
    }

    render() {
        return (
            <h1 style={{color: "red"}}>Unmount</h1>
        )
    }
}
