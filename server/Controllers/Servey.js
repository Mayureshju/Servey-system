const Servey = require("../models/Servey");
const mongoose = require('mongoose');
// create post
exports.createServey = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    nationality,
    email,
    phoneNumber,
    address,
    message,
  } = req.body;

  try {
    // Check if email or phone number already exist in the database
    const existingServey = await Servey.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingServey) {
      return res.status(409).json({
        success: false,
        message: "Email or phone number already exists",
      });
    }

    // If not, create a new Servey document
    const newServey = new Servey({
      firstname,
      lastname,
      gender,
      nationality,
      email,
      phoneNumber,
      address,
      message,
    });

    // Save the new survey document
    await newServey.save();

    res.status(201).json({
      success: true,
      newServey,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getAllServey = async (req, res) => {
  try {
    const allSurveys = await Servey.find();
    res.status(200).json({
      success: true,
      surveys: allSurveys,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


