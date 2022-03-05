const express = require("express");
const User = require("../models/customerModel");

const router = express.Router();

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: "success",
    users,
  });
};

const postNewUser = async (req, res) => {
  const doc = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

const login = async (req, res) => {
  const doc = await User.findOne({ phone: req.params.id });

  if (!doc) {
    res.status(404).json({
      status: "failed",
      data: {
        data: "No Customers were found with that Phone Number",
      },
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

router.get("/", getAllUsers);
router.post("/", postNewUser);
router.get("/:id", login);

module.exports = router;
