const data = require("../controller/userController")
const express = require("express");
const { isAutnticatedUser , authRole } = require("../middelwear/auth");
const router = express.Router()



router.route("/register").post(data.registerUser)
router.route("/login").post(data.useLogin);
router.route("/logout").get(data.LogOutUser);
router.route("/users").get(isAutnticatedUser,authRole("admin"), data.allUser);
router.route("/username").get(isAutnticatedUser,data.userName)

module.exports= router