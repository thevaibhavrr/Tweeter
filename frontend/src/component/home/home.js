import React, { useEffect, useState } from "react";
import "./home.css";

function Home() {
  var [tweet, SetTweet] = useState([]);
 
  var backendData = async () => {
    try {
      var res = await fetch("/api/v1/tweet", { method: "get" });
      var resData = await res.json();
      await SetTweet(resData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    backendData();
  }, []);
  return (
    <>
      {tweet.map((e) => (
        <div class="container">
          <div class="post">
            <div class="post-header">
              <img
                alt="imag"
                class="avatar"
                // src="https://i.pravatar.cc/150?img=3"
                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              />

              <div class="header-text">
                <span class="username">{e.name}</span>
                <span class="timestamp">{e.date}</span>
              </div>
            </div>
            <div class="post-body">{e.tweet}</div>

            <img
              alt="imag"
              class="post-image"
              src="https://picsum.photos/600/400"
            />
            {/* <div class="post-footer">
              <div class="footer-left">
                <i class="footer-icon fas fa-comment"></i>
                <span class="footer-text">2</span>
                <i class="footer-icon fas fa-retweet"></i>
                <span class="footer-text">5</span>
                <i class="footer-icon like-icon fas fa-heart"></i>
                <span class="footer-text">10</span>
              </div>
              <div class="footer-right">
                <i class="footer-icon fas fa-external-link-alt"></i>
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
