const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var locationSchema = new Schema (
    {
        meetingPlace: {
            type: String,
            required: true,
        },
        meetingTime: {
            type: String,
            required: true,
        },
        mettingTopic: {
            type: String,
            required: true
        }
    }
);
 
module.exports = mongoose.model('location', locationSchema);