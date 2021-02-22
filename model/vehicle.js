const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  vehicleType: String,  
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
