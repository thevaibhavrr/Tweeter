const data = require("../controller/tweetController");
const express = require("express");
const router = express.Router();
const { isAutnticatedUser, authRole } = require("../middelwear/auth");

router
  .route("/tweet")
  .post(isAutnticatedUser, data.PostTweet)
  .get(data.ALLTweet);
router
  .route("/tweet/:id")
  .put(isAutnticatedUser, data.updateTweet)
  .delete(isAutnticatedUser, data.DeleteTweet);

module.exports = router;
