const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    name: String,
    numScoops: Number,
    flavor: String,
    toppings: [String],
    whipAndCherry: Boolean
}, {timestamps:true})

const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;