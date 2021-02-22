const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  amount: {
    type: Number,
  },
  appointmentId: {
    type: Schema.Types.ObjectId,
    ref: "Appointment",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  time: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("Payment", PaymentSchema);
