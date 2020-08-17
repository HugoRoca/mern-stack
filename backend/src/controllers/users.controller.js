const UserModel = require("../models/User");

const userController = {};

userController.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new UserModel({ username });
  await newUser.save();
  res.json({ message: "User create" });
};

userController.deleteUser = async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndDelete(id);
  res.json({ message: "User delete" });
};

module.exports = userController;
