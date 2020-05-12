import React, { Component } from 'react';
import axios from 'axios';

import PinCard from './PinCard';

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
            <div className="container-fluid">
                <div className="row">
                    <div className="card-columns">
                            {
                                this.state.pins.map(pin =>
                                (
                                    <PinCard
                                    imgUrl={pin.src.medium}
                                    author={pin.photographer}
                                />))
                            }
                    </div>
                </div>
            </div>
        )
    }
}
