const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CoupSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  date: { type: Date, default: Date.now() },
});


// Virtual for author's URL
CoupSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/coup/${this._id}`;
},
{strictPopulate: false});

// Export model
module.exports = mongoose.model("Coup", CoupSchema);
