const express = require("express");
const router = express.Router();
const BoardCtrl = require("../controllers/board_controller");
const auth = require("../middlewares/auth");


router.post("/boards", BoardCtrl.getBoards);
// router.post("/board", async (req, res) => {
//     const new_board = new Board(req.body);
//     await new_board.save();
//     res.json({
//         "status": "Saved"
//     });
//     console.log(new_board);
// });
// router.post("/board/savePin", async (req, res) => {
//     const {board, pin} = req.body;
//     const new_pin = new Pin(pin);

//     await Board.findOneAndUpdate(
//         {name: board.name}, 
//         {$push: {pins: new_pin}
//     });
//     // await new_board.save();
//     res.json({
//         "status": "Saved Pin on board"
//     });
//     // console.log(new_board);
// });
router.post("/save", BoardCtrl.savePin);
router.post("/", BoardCtrl.saveBoard);

module.exports = router;