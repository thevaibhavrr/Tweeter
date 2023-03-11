var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const today = new Date();
const date = today.getDate();
const month = today.getMonth() + 1; // getMonth() returns 0-indexed months, so add 1
const year = today.getFullYear();

var TweetSchema = new Schema({
  name: {
    type: String,
    ref: "User",
    required: true,
  },
  tweet: {
    type: String,
    required: [true , "Please Enter Tweet"],
  },
  date:{
    type : String,
    default :(`${year}-${month}-${date}`)
  }
});

var Tweet = mongoose.model("tweet", TweetSchema);
module.exports = Tweet;
