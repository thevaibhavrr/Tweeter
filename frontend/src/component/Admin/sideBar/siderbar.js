import React from "react";
import "./siderbar.css";
import {NavLink} from "react-router-dom"
import Table from "../table/table";
import Header from "../../header/header";
function Siderbar() {
  return (
    <>
      <div style={{ background: "rgb(3, 35, 67)", marginTop: -50 }}>
        <Header />
      </div>
      <div className="first">
        <div className="data">
          <div className="photo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU"
              alt="imgj"
              style={{ width: 190, borderRadius: 200, marginTop: 5 }}
            />
          </div>
          <div className="tdata">
            <h2 style={{ color: "white" }}>Welcome Admin !</h2>
            <table className="table">
              <tr>
                <NavLink to="/">Home </NavLink>{" "}
              </tr>
              <tr>
                <NavLink to="/admin/tweet">All Tweets </NavLink>{" "}
              </tr>
              <tr>Enquiry</tr>
              <tr>Service</tr>
              <tr>Blog</tr>
              <tr>Quote Enquiry</tr>
              <tr>CaseStudy</tr>
            </table>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
}

export default Siderbar;
