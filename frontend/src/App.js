import "./App.css";
import Home from "./component/home/home";
import Register from "./component/User/Register/register";
import Login from "./component/User/Login/login";
import PostTwet from "./component/Tweets/postTweet/postTwet";
import Siderbar from "./component/Admin/sideBar/siderbar";
import Alltweet from "./component/Admin/AllTweet/alltweet";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/register" element=<Register /> />
        <Route path="/login" element=<Login /> />
        <Route path="/post" element=<PostTwet /> />
        <Route path="/admin" element=<Siderbar /> />
        <Route path="/admin/tweet" element=<Alltweet /> />
      </Routes>
    </div>
  );
}

export default App;
