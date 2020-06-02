import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getBoards} from '../actions/pinActions';

const Boards = ({
    getBoards,
    boardArray
}) =>{
    useEffect(() => {
        getBoards();
    }, []);

    function handleClick(e){
        e.preventDefault();
        getBoards();
    }

    const {boards} = boardArray;

    return (
        <div><h1>Hey</h1><button onClick={handleClick}>Click</button></div>
    );
};

const mapStateToProps = (state) => ({
    boardArray: state.pin,
});

export default connect(mapStateToProps, { getBoards })(Boards);