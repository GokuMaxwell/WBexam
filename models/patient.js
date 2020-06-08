const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    DOB: {type: Date, default: Date.now},
    contact: {type: String},
    residentAddress: {type: String},
    emergencyNo: {type: String}
})

const patient = mongoose.model('patient', patientSchema);

const paymentSchema =  new mongoose.Schema({
    
})
const payment = mongoose.model('payment', paymentSchema)

module.exports = { patient }