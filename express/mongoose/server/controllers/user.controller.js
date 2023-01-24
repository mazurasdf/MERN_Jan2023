const Sundae = require("../models/user.model")

module.exports.testRoute = (req,res) => {
    // Sundae.update

    res.json({message: "hellow from the controller!!"});
}