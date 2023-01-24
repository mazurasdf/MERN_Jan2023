const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user_test_jan2023",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("you're connected to the database now!"))
    .catch(err=>console.log("can't connect to the database!",err))