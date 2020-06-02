import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {savePin} from '../actions/pinActions';
import {useDispatch} from 'react-redux';

const PinCard = (props) => {
        const api_ID = props.api_ID;
        const width = props.width;
        const height = props.height
        const url = props.url;
        const dispatch = useDispatch();

        function handleClick(e) {    
            e.preventDefault();
            // console.log('The link was clicked.');
            // console.log("Res: ", api_ID, width, height, url);
            dispatch(savePin({api_ID, width, height, url}));
            // logout();
        }
        
        return (
            <div className="card card-pin">         
                <img className="card-img" src={props.imgUrl}></img>
                <div className="overlay">
                    <h2 className="card-title title">De <strong>{props.author}</strong></h2>
                    <div className="more">
                        {/* <i className="fa fa-arrow-circle-o-right" aria-hidden="true" ></i> */}
                        <button className="btn btn-danger round-btn" onClick={handleClick}>save</button>
                    </div>
                </div>
            </div>
        )
}


export default connect(null, {savePin})(PinCard);