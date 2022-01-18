import React, { Component } from 'react'
import CompUnmount from './CompUnmount';

export default class InvokeCompUnmount extends Component {
    state = { display: true };

    deleteUnmount = () => {
        this.setState({ display: false })
    }

    render() {
        let x;
        if (this.state.display) {
            x = <CompUnmount />
        } else {
            console.log('component deleted')
        }
        return (
            <div>
                {x}
                <button onClick={this.deleteUnmount}>Delete the component</button>
            </div>
        )
    }
}