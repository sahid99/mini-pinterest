const Pin = require("../models/pin");
const Board = require("../models/board");
const BoardCtrl = {};
//function to handle erros with async await
const to = require('../helpers/to');
const prototypeBoard = require("../design_patterns/prototype/prototypeBoard");

BoardCtrl.getPins = async (req, res) => {
    let err, board, uniqueName;

    const {user, name} = req.body;
    if(!user || !name) return res.status(400).json({
        msg: "Error reading user or board name!"
    });

    [err, board] = await to(Board.findOne({uniqueName: user.concat(name)}));
    if(err || !board) return res.status(400).json({
        msg: "Error when get pins!"
    });

    res.json(board.pins);
    // console.log(board);
    // console.log(err);
}


BoardCtrl.saveBoard = async (req, res) => {
    let err;
    const {user, name} = req.body;
    if(!user || !name) return res.status(400).json({
        msg: "Error reading user or board name!"
    });
    const new_board = new Board({user, name, uniqueName: ""});

    [err, new_board.uniqueName] = await to(new_board.hashName(user.concat(name)));
    if(err) return res.status(400).json({
        msg: "Error in unique name!"
    });
    [err] = await to(new_board.save());
    if(err) return res.status(400).json({
        msg: "Error in saving board!"
    });

    //Checar que retorno para react
    res.json({
        "status": "Saved"
    });
    // console.log(new_board);
};

BoardCtrl.savePin = async (req, res) => {
    let err, find;
    //needs better error handlyng
    const {board, pin} = req.body;
    if(!board || !pin) return res.status(400).json({
        msg: "Error reading board or pin!"
    });
    const new_pin = new Pin(pin);

    [err, find] = await to(Board.findOneAndUpdate(
        {uniqueName: board.user.concat(board.name)}, 
        {$push: {pins: new_pin}
    }));
    if(err || !find) return res.status(400).json({
        msg: "Error in saving pin on board!"
    });
    //Check the message that returns
    res.json({
        "status": "Saved Pin on board"
    });
    // console.log(new_board);
};


BoardCtrl.getBoards = (req, res) =>{
    //Here i use promices because gave me error with async/await
    const {user} = req.body;

    Board.find({user:user}).then(boards => {
        const boardData = new prototypeBoard(boards);
        return res.json({boards: boardData.clone()});
    })
    .catch(err => {
        return res.status(400).json({
            msg: "Error getting boards"
    })});
}

module.exports = BoardCtrl;