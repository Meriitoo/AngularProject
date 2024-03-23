var locationService = require('../services/locationService');

var getDataControllerfn = async (req, res) => {
    var location = await locationService.getDataFromDBService();
    res.send({ "status": true, "data": location });
}

var createLocationControllerFn = async (req, res) => {
    var status = await locationService.createLocationDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Location created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating location" });
    } 
}

var updateLocationController = async(req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    var result = await locationService.updateLocationDBService(req.params.id, req.body);

    if (result) {
        res.send({"status": true, "message": "Location Updated"});
    } else{
        res.send({"status": false, "message": "Location Updated Failed"});
    }
}

var deleteLocationController = async(req, res) => {
    console.log(req.params.id);

    var result = await locationService.removeLocationService(req.params.id);

    if(result) {
        res.send({"status": true, "message": "Location Deleted"});
    } else{
        res.send({"status": false, "message": "Location Deleted Failed"});
    }
}


module.exports = { getDataControllerfn, createLocationControllerFn, updateLocationController, deleteLocationController };