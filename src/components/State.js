import React, { Component } from "react";

export default class State extends Component {

    constructor() {
        super();
        this.state = { color: true }
    }

    render() {
        const colortest = this.state.color ? (<div><h2>Test my color</h2></div>) : null;
        console.log(colortest);
        return (
            <div>
                <h1>Green Color</h1>
                {colortest}
            </div>
        )
    }

}