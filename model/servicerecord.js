const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceRecords = new Schema({
  servicecategory: {
    type: String,
  },
  
  appointmentId: {
    type: Schema.Types.ObjectId,
    ref: "Appointment",
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  vehicleId: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
  },
  status:{
      type:String,
  }
},{timestamps:true});

module.exports = mongoose.model("ServiceRecord", serviceRecords);
