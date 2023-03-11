const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");

const registerUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const Existuser = await User.findOne({ email });
    if (Existuser) {
      return res.status(401).json({ error: "Email Already Exist" });
    } else {
      const user = await User.create({ name, email, password, role });
      res.status(200).json({ message: "user Register Succesfull", user: user });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const useLogin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all Fields" });
    } else {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(533).json({ error: "Inavlid Email" });
      } else {
        const isPassword = await user.comparePassword(password);
        if (!isPassword) {
        return  res.status(400).json({ error: "wrong password" });
        }
        // res.json("vaibhav")
      }
      sendToken(user, 200, res);
    }
  } catch (error) {
    res.json(error);
  }
};
// Logout
const LogOutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.json({ message: "Logout Scucesfull" });
};

// all users
const allUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users: users });
};

const userName = async (req,res)=>{
  req.body.user = req.user.name
  const name = req.body.user
  res.json(name)
}


module.exports = {
  registerUser,
  useLogin,
  allUser,
  LogOutUser,
  userName
};
