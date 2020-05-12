import React, { Component } from 'react'

export default class PinCard extends Component {
    render() {
        return (
            <div className="card card-pin">
                <img className="card-img" src={this.props.imgUrl}></img>
                <div className="overlay">
                    <h2 className="card-title title">De <strong>{this.props.author}</strong></h2>
                    <div className="more">
                        <a href="post.html">
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                    </div>
                </div>
            </div>
        )
    }
}
