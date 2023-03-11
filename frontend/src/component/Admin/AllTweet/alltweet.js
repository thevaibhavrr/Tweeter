import React,{useState,useEffect} from 'react'
import "./AllTweet.css"
function Alltweet() {

      const [Details, setdetails] = useState([]);

      const backendData = async () => {
        try {
          const res = await fetch("/api/v1/tweet", {
            method: "get",
          });
          const resData = await res.json();
          await setdetails(resData);
        } catch (error) {
          alert(error);
        }
      };
      console.log(Details);
      useEffect(() => {
        backendData();
      }, []);


  return (
    <div class="container">
      <h1>Tweets</h1>

      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Tweet</th>
              <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {Details.map((e) => (
            <tr>
              <td>{e.name}</td>
              <td>{e.tweet}</td>
              <td>{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alltweet