import React, { Component } from 'react'

export default class BoardCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.bName}</h5>
                    <p className="card-text">Number of pins {this.props.pins}</p>
                </div>
            </div>
        )
    }
}
