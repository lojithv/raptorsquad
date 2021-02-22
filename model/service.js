const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  agentId: {
    type: Schema.Types.ObjectId,
    ref: "ServiceAgent",
  },
  category: {
    type: String,
  },
  title: { type: String },
  description: { type: Number },
  price:{type:Number}
});

module.exports = mongoose.model("Service", serviceSchema);
