import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const history = useNavigate()

  const LogOut = async () => {
    await fetch("/api/v1/logout", { method: "get" });
    history("/login")
  };

 
  return (
    <nav>
      <ul class="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li style={{ marginLeft: 1250 }}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li >
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li
          class="nav-item dropdown"
          style={{ marginTop: -8, marginBottom: -10 }}
        >
          <a
            class="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* {name} */}
          </a>
          <ul
            class="dropdown-menu"
            style={{
              color: "black",
              backgroundColor: "red",
              marginLeft: 200,
            }}
          >
            <li>
              <a class="dropdown-item" href="/" onClick={LogOut}>
                LogOut
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
