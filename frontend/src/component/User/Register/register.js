import React, { useState } from "react";
import "./register.css";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
const navigate = useNavigate();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("");
 const [role, setRole] = useState("user");

const registerUser = async(e)=>{
  e.preventDefault()
  const res = await fetch("/api/v1/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      name,email,password,role
    })
  });
  // const data = res.json()

  if(res.status === 401){
    alert("Email Already Exist")
  }else {
    alert("Register sucess")
    navigate("/login")
    
  }
}


  return (
    <div class="login-form">
      <h1>Join Today</h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          required
          style={{ border: "1px solid" }}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          style={{ border: "1px solid" }}
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={{ border: "1px solid" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          style={{ border: "1px solid" }}
          name="name"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit" onClick={registerUser}>Sign Up</button>
        <p>
          By signing up, you agree to our <a href="/">Terms of Service</a> and{" "}
          <a href="/">Privacy Policy</a>.
        </p>
        <NavLink to="/login"> Already have account ? Login here </NavLink>
      </form>
    </div>
  );
}

export default Register;
