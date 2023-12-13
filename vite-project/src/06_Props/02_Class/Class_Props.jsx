import React, { Component } from 'react'

export default class Class_Props extends Component {
    render() {
        console.log("------------->", this.props);
        return (
            <>
                <h1>Hello, {this?.props?.data?.name}</h1>
                <h2>{this?.props?.data?.gretting}</h2>
            </>
        )
    }
}