// Define the schema for students collection to be stored in the DB

const mongoose = require("mongoose");

//Schema

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        min : 19,
    },
    email : {
        type : String,
        require : true,
        lowercase : true,
        minLength : 15
    },
    subject : [String],
    // createAt : {
    //     type : Date,
    //     immutable : true,
    //     default : () => {
    //         return Date.now()
    //     }
    // }
},{versionKey : false , timestamps : true})


// Go ahead and create corresponding collection in DB

module.exports = mongoose.model("Student", studentSchema);

