import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {getBoards} from '../actions/pinActions';
import BoardCard from './BoardCard';

const Boards = ({
    getBoards,
    boardArray
}) =>{
    useEffect(() => {
        getBoards();
    }, []);

    // function handleClick(e){
    //     e.preventDefault();
    //     getBoards();
    // }

    const {boards} = boardArray;

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h1>Boards</h1>
            </div>
            <div className="row">
                <div className="card-columns">
                        {/* The if is for avoiding to crash because for a short time pins is null */}
                        { boards ?
                            boards.map(board =>
                            (
                                <BoardCard
                                bName = {board.name}
                                pins = {board.pins}
                            />))
                        : ""}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    boardArray: state.pin,
});

export default connect(mapStateToProps, { getBoards })(Boards);