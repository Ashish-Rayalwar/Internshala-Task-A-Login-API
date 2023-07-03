const userModel = require("../models/userModel");
const {
  isvalidUsername,
  isvalidpassword,
} = require("../validation/validation");

const signup = async (req, res) => {
  try {
    const data = req.body;
    const { username, password } = data;

    if (!isvalidUsername(username)) {
      return res.status(400).json({
        message:
          "Username is invalid, username must contain only alphanumeric characters",
      });
    }
    if (!isvalidpassword(password)) {
      return res.status(400).json({
        message:
          "password is invalid, password must contain alphabet,number & special characters, length must be 6 - 12 characters",
      });
    }

    const user = await userModel.findOne({ username: username });

    if (user)
      return res
        .status(409)
        .json({ message: "user allready exist, try different username" });

    const createUser = await userModel.create(data);
    return res
      .status(201)
      .json({ data: createUser, message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    const { username, password } = data;
    if (!isvalidUsername(username)) {
      return res.status(400).json({
        message:
          "Username is invalid, username must contain only alphanumeric characters",
      });
    }
    if (!isvalidpassword(password)) {
      return res.status(400).json({
        message:
          "password is invalid, password must contain alphabet,number & special characters, length must be 6 - 12 characters",
      });
    }
  
    const user = await userModel.findOne({ username: username });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password != password)
      return res.status(400).json({ message: "incorrect password" });

    return res.status(200).json({ data: user, message: "login successful" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { signup, login };
