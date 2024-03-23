const express = require('express');
const router = express.Router();

var locationController = require('../controllers/locationController');

router.get('/getAll', locationController.getDataControllerfn);

router.post('/create', locationController.createLocationControllerFn);

router.patch('/update/:id', locationController.updateLocationController);

router.delete('/remove/:id', locationController.deleteLocationController);


module.exports = router;