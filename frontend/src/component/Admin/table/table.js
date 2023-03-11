import React, { useEffect, useState } from "react";
import "./table.css";

function Table() {
  const [Details, setdetails] = useState([]);

  const backendData = async () => {
    try {
      const res = await fetch("/api/v1/users", {
        method: "get",
      });
      const resData = await res.json();
      await setdetails(resData.users);
    } catch (error) {
      alert(error);
    }
  };
  console.log(Details);
  useEffect(() => {
    backendData();
  }, []);

  return (
    <div>
      <div
        className="table-responsive"
        style={{ backgroundColor: "rgb(3, 35, 67)" }}
      >
      <h5 style={{color:"white" , marginLeft:-80}}>Users</h5>
        <table
          className="table table-striped"
          style={{ backgroundColor: "black" }}
          
        >
          <thead className="thead-light" style={{ width: 100 }}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role Type</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "rgb(3, 35, 67)" }}>
            {Details.map((output) => (
              <tr>
                <td>{output._id}</td>
                <td>{output.name}</td>
                <td>{output.email}</td>
                <td>{output.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
