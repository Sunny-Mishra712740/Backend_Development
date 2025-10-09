// Controller for creating the category

const category_model = require("../models/category.model");

exports.createNewCategory = async (req, res) => {
  // Read request body

  // Create the category object

  const cat_data = {
    name: req.body.name,
    description: req.body.description,
  };

  try {
    // insert into mongodb
    const category = await category_model.create(cat_data);
    return res.status(201).send({
      message: "Category created successfully",
      category: category,
    });
  } catch (error) {
    console.log("Error while creating the category", error);
    return res.status(500).send({
      message: "Error while creating the category",
    });
  }

  // return the response of the created category
};
