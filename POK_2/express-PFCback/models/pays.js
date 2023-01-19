const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaysSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  couleur: { type: String, required: true, maxLength: 100 },
  etoiles: {type:Number, maxLength:5},
});

/* Virtual for author's full name
PaysSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.name && this.etoiles) {
    fullname = `${this.name}, ${this.etoiles} étoiles`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});*/

// Virtual for author's URL
PaysSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/pays/${this._id}`;
});

// Export model
module.exports = mongoose.model("Pays", PaysSchema);
  