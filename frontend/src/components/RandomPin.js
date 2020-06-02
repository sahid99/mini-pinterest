import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getPins} from '../actions/pinActions';

import PinCard from './PinCard';

const RandomPin = ({
    getPins,
    pinArray
}) => {

    useEffect(() => {
        getPins();
    }, []);

    const {pins} = pinArray;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card-columns">
                        {/* The if is for avoiding to crash because for a short time pins is null */}
                        { pins ?
                            pins.map(pin =>
                            (
                                <PinCard
                                imgUrl={pin.url}
                                author={pin.author}
                                api_ID={pin.api_ID}
                                width={pin.width}
                                height={pin.height}
                                url={pin.url}
                            />))
                        : ""}
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    pinArray: state.pin,
});


export default connect(mapStateToProps, { getPins })(RandomPin);