import React, { Component } from 'react';
import axios from 'axios';

export default class RandomPin extends Component {
    state = {
        pins: []
    }

    async componentDidMount(){
        const res = await axios.get("http://localhost:4000");
        this.setState({pins: res.data.photos});
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    Form User
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.pins.map(pin =>
                            (<li className="list-group-item list-group-item-action" key={pin.id}>
                                {pin.src.original}
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
