import React, { useEffect, useState } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"

function Login() {
  const Native = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/v1/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
	if (res.status === 533) {
      window.alert("invalid email id");
    } else if (res.status === 400 || !data) {
      window.alert("invalid password");
      window.alert(data.err);
    } else {
      window.alert("login succesfulll");
	  Native("/")
    }
  };

  return (
    <div class="login-form">
      <h2>Twitter Login</h2>
      <form>
        <label>Email</label>
        <input
          type="email"
          style={{ border: "1px solid" }}
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" onClick={loginUser} />
        <NavLink to="/register"> Don't have account ? Register here </NavLink>
      </form>
    </div>
  );
}

export default Login;
