var locationModel = require('../models/locationModel');


module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve ,reject){
        locationModel.find({}, function returnData(error, result) {
            if(error){
                reject(false);
            }else{
                resolve(result);
            }
        }); 
    });
}

module.exports.createLocationDBService = (locationDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var locationModelData = new locationModel();

        locationModelData.meetingPlace = locationDetails.meetingPlace;
        locationModelData. meetingTime = locationDetails.meetingTime;
        locationModelData.mettingTopic = locationDetails.mettingTopic;

        locationModelData.save(function resultHandle(error, result) {
            if(error) {
                reject(false);
            }
            else{
                resolve(true);
            }
        })
    })
}

module.exports.updateLocationDBService = (id, locationDetails) => {
    console.log(locationDetails);

    return new Promise(function myFn(resolve, reject) {
        locationModel.findByIdAndUpdate(id, locationDetails, function returnData(error, result) {
            if(error) {
                reject(false);
            }
            else{
                resolve(result)
            }
        });
    });
}

module.exports.removeLocationService  = (id) => {
    return new Promise(function myFn(resolve, reject) {
        locationModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error){
                reject(false);
            }else{
                resolve(result);
            }
        });
    })
}

