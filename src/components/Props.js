//Props -> properties in react -> read-only components
//Props are passed to the component in the same way as args passed in a function
//Props are immutable

import React, { Component } from 'react'

export default class Props extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}
