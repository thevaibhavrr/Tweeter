const JWT = require("jsonwebtoken");
const User = require("..//model/userModel");

exports.isAutnticatedUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
     return res.status(401).json({ error: "Please Login TO access this resource" });
    }
    const decodeData = JWT.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodeData.id);

    next();
  } catch (error) {
    console.log(error);
  }
};

exports.authRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          message: `Role ${req.user.role} is not allowed to access this resource`,
        })
      );
    }
    next();
  };
};
