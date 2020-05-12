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
            <div className="row">
                <div className="col-md-4">
                    Form User
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.pins.map(pin =>
                            (<PinCard
                                imgUrl={pin.src.small}
                                author={pin.photographer}
                            />))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
