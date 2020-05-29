import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';

export default function Test() {
//https://www.robinwieruch.de/react-hooks-fetch-data

    const [data, setData] = useState({ auth: true, token: "" });

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios({
            method: 'post',
            url: 'http://localhost:4000/users/signin',
            data: {
                email: "pepe@gmail.com",
                password: "pepe99"
            }
        });

        setData(result.data);
    };
    fetchData();
    }, []);
    console.log(data);
    return (
        <div>
            <h1>Hey</h1>
            {data.token}
        </div>
    )
}
