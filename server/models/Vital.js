
// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const VitalSchema = new Schema({
    id: String,
    bodytemp: String,
    heartrate: String,
    bloodpressure: String,
    respitoryrate: String,
  
	
});

// Create the 'Nurse' model out of the 'NurseSchema'
module.exports = mongoose.model('Vital', VitalSchema);


//import mongoose from 'mongoose'
/*
const Schema = mongoose.Schema

export const Nurse = mongoose.model('Nurse', {
  bodytemp: String,
  heartrate: String,
  bloodpressure: String,
  respitoryrate: String,
  nurse: {
    type: Schema.Types.ObjectId,
    ref: 'Nurse'
  }
})*/