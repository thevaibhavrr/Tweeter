const Tweet = require("../model/tweetModel");

// posting tweet
const PostTweet = async (req, res) => {
  req.body.user = req.user.name;
  // user name
  const name = req.body.user;
  // user tweet
  const { tweet } = req.body;
  try {
    // create tweet with name  and post
    const post = await Tweet.create({ name, tweet });
    res.json({ post: post });
  } catch (error) {
    res.json({ error: error });
  }
};
// Get ALL Tweets
const ALLTweet = async (req, res) => {
  const Tweeets = await Tweet.find();
  // const twit = Tweeets.map((e) => {
  //   return e.name;
  // });
  res.json( Tweeets);
};

// Update Tweet
const updateTweet = async (req, res) => {
  let tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    res.status(404).json({ error: "Tweet Not Found" });
  }
  tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ sucess: true, tweet });
};

// Delete Tweet

const DeleteTweet = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    res.status(404).json({ error: "Tweet Not Found" });
  }
  const deleteTweet = await Tweet.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Tweeet deleted succesfull",
    deleteTweet,
  });
};

// sending funcation to other file
module.exports = {
  PostTweet,
  updateTweet,
  DeleteTweet,
  ALLTweet,
};
