
var winnerService = require('../services/winnerService');

var createWinnerControllerFn = async (req, res) => {
    var status = await winnerService.createWinnerDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Location created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating location" });
    }
}

module.exports = {createWinnerControllerFn}