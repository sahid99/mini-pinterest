"use strict";

class prototypeBoard{
    constructor(boardModel){
        // console.log(boardModel);
        this.boardArray = boardModel;
    }

    clone(){
        const boardsData = [];
        this.boardArray.forEach(board => {
            const data = {
                name: board.name,
                user: board.user,
                pins: board.pins.length
            };
            boardsData.push(data);
        });
        console.log(boardsData);
        return boardsData;
    }
}

module.exports = prototypeBoard;