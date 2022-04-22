// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true
		}).then(() => console.log('DB Connected!'))
		.catch(err => {
		console.log(err);
		});

	// Load the 'User' model 
	require('../models/Nurse');

	// Return the Mongoose connection instance
	return db;
};