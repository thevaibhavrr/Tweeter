import React, { useState } from "react";
import "./postTwet.css";
import { useNavigate } from "react-router-dom";

function PostTwet() {
  const history = useNavigate()
  const [tweet, SetTweet] = useState("");
  const SubmitTweet = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/v1/tweet", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweet }),
    }); 
    const data = res.json()
    console.log(data)
    if(!data){
        alert("Unable to post Tweet")
    } else if(data.status === 401){
      alert("you must have to login to acces this")
      history("/login")
    }
    else{
        alert("Tweet Posted Suceesfully")
      history("/post");

    }
  };

  return (
    <div class="TWTcontainer">
      <form>
        <h1>Post a Tweet</h1>
        <textarea
          placeholder="What's on your mind?"
          type="text"
          name="tweet"
          value={tweet}
          onChange={(e) => {
            SetTweet(e.target.value);
          }}
        ></textarea>
        <input type="submit" value="Post" onClick={SubmitTweet} />
      </form>
    </div>
  );
}

export default PostTwet;
