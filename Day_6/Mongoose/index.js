const mongoose = require('mongoose');
const studentModel = require('./models/student.model');

// Code to connect with MongoDB
mongoose.connect("mongodb://localhost/be_demonb");

const db = mongoose.connection;  // Start the connection with MongoDB

db.on("error", () => {
    console.log("Error while connecting to DB");
});

db.once("open", () => {
    console.log("Connected to MongoDB");

    //Logic to insert data into db
    init();

    // Running the queries on MongoDB
    dbQueries();
});

async function init() {
    // Logic to insert data in DB
    const student = {
        name: "Sunny",
        age: 23
    };

    const stu_obj = await studentModel.create(student);
    console.log(stu_obj);
}

async function dbQueries() {
    // Read the student data
    console.log("Inside the dbQueries function")
    // Read the student data based on the id
    try{
        const student = await studentModel.findById("68d3844ed8aa733b33e2d23e");
        console.log(student)
    }catch(err){
        console.log(err)
    }

    // I want to go and search based on name

    try{
        const students = await studentModel.find({name:"Sunny"})
        console.log(students)
    }catch(err){
        console.log(err)
    }

    // Deal with the multiple conditions

    const stds = (await studentModel.where("age").gt("10").where("name").equals("Sunny").limit(2))
    console.log(stds)

    // Delete one document where name = "vishwa"

    const student = await studentModel.deleteOne({name : "Vishwa"})
    console.log(student)

}