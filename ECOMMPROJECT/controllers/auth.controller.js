const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require('uuid');
const user_model = require("../models/user.model");

exports.signup = async (req, res) => {
    try {
        const request_body = req.body;

        // Validate required fields
        if (!request_body.name || !request_body.email || !request_body.password) {
            return res.status(400).send({ message: "Name, email, and password are required" });
        }

        // Prepare user object
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
