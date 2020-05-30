import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {tokenCheck, login} from '../actions/authActions';
import {getPins} from '../actions/pinActions';

export default function Test() {
//https://www.robinwieruch.de/react-hooks-fetch-data
    const dispatch = useDispatch();
    // const [data, setData] = useState({ auth: true, token: "" });

    useEffect(() => {
    const fetchData = async () => {
        // setData(result.data);
    };
    fetchData();
    }, []);
    // console.log(data);
    return (
        <div>
            <h1>Hey</h1>
            {/* Dispatch cambia el estado del store, recibe un action */}
            <button onClick={()=>dispatch(login({email:"pepe@gmail.com", password: "pepe99"}))}>Token</button>
            <button onClick={dispatch(getPins())}>Pins</button>
        </div>
    )
}
