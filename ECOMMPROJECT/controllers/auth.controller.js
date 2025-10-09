// I need to write the controller / logic to register a user

const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const user_model = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = require("../configs/auth.config")

exports.signup = async (req, res) => {
    try {

        // Read the request body

        const request_body = req.body;

        

        // if (!request_body.name || !request_body.email || !request_body.password) {
        //     return res.status(400).send({ message: "Name, email, and password are required" });
        // }

        
        // Insert the data in the users collection in MongoDB

        const userObj = {
            name: request_body.name,
            userId: request_body.userId || uuidv4(),
            email: request_body.email,
            userType: request_body.userType || "user",
            password: bcrypt.hashSync(request_body.password, 8)
        };

        // Save to MongoDB
        const user_created = await user_model.create(userObj);

        const res_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt : user_created.createdAt,
            updatedAt : user_created.updatedAt
        }

        res.status(201).send(res_obj);

    } catch (error) {
        console.error("Error while registering the user:", error);
        res.status(500).send({ message: "Some error happened while registering a user" });
    }
};


exports.signin = async (req, res) => {
    try {
        // Check if the user id is already present in the system
        const user = await user_model.findOne({ userId: req.body.userId });

        if (user == null) {
            return res.status(400).send({
                message: "User id passed is not a valid user id"
            });
        }

        // Comparing password is correct or not
        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Wrong password passed"
            });
        }

        // Using jwt we will create the access token with a given TTL and return
        const token = jwt.sign({ id: user.userId }, secret.secret, {
            expiresIn: 120
        });

        
        return res.status(200).send({
            name: user.name,
            userId: user.userId,
            email: user.email,
            userType: user.userType,
            accessToken: token
        });

    } catch (error) {
        return res.status(500).send({
            message: "Internal server error",
            error: error.message
        });
    }
};