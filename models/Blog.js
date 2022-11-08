const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
  name: String,
  description: String,
  duration: String,
  calification: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Blog", blogSchema);

/*
    Propiedad definida: "blogSchema"
    Uso del esquema definido
    Creación del modelo "Blog"
*/