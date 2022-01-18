import React, { Component } from 'react'

export default class StateChange extends Component {
    constructor() {
        super();
        this.state = {
            value: "Welcome to React"
        }
        this.updateSetState = this.updateSetState.bind(this);
    }

    updateSetState() {
        this.setState({ value: "Goodbye to React" })
    }

    render() {
        return (
            <div>
                <h4>{this.state.value}</h4>
                <button onClick={this.updateSetState}>Change State</button>
            </div>
        )
    }
}
