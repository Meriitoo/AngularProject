
var winnerModel = require('../models/winnerModel');

module.exports.createWinnerDBService = (winnerDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var winnernModelData = new winnerModel();

        winnernModelData.firstName = winnerDetails.firstName;
        winnernModelData.lastName = winnerDetails.lastName;
        winnernModelData.telephone = winnerDetails.telephone;
   
        winnernModelData.save(function resultHandle(error, result) {
            if(error) {
                reject(false);
            }
            else{
                resolve(true);
            }
        })
    })
}

