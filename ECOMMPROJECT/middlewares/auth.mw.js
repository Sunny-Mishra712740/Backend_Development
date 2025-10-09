// Create a mw will check if the request body is proper and correct

const user_model = require("../models/user.model")


const verifySignUpBody = async (req, res, next) => {
  try {
    // Check for the name
    if (!req.body.name) {
      return res.status(400).send({
        message: "Failed ! Name was not provided in request body",
      });
    }
    // Check for the email
    if (!req.body.email) {
      return res.status(400).send({
        message: "Failed ! Email was not provided in request body",
      });
    }

    // Check for the userId
    if (!req.body.userId) {
      return res.status(400).send({
        message: "Failed ! userId was not provided in request body",
      });
    }

    // Check if the user with the same userId is already present
    const user = await user_model.findOne({userId : req.body.userId})

    if(user){
        return res.status(400).send({
        message: "Failed ! user with the same userId is already present",
      });
    }

    next()


  } catch (err) {
    console.log("Error while validating the request object");
    res.status(500).send({
      message: "Error while validating the request body",
    });
  }
};




const verifySignInBody = async (req, res, next) => {
    
    // Check for userId
    
    if (!req.body.userId) {
      return res.status(400).send({
        message: "userId is not provided"
      });
    }
    // Check for password

    if (!req.body.password) {
      return res.status(400).send({
        message: "Password is not provided"
      });
    }
    
    next()
}

const verifyToken = (req, res, next) => {
  // Check if the token is present in the header

  // if it's the valid token 
}

module.exports = {
  verifySignUpBody : verifySignUpBody,
  verifySignInBody : verifySignInBody
}