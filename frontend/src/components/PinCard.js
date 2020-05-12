import React, { Component } from 'react'

export default class PinCard extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.imgUrl} alt=""/>
                <div class="card-body">
                <h5 class="card-title">De <b>{this.props.author}</b></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}
