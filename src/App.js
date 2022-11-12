// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((res) => res.json())
      .then((jsondata) => setData(jsondata.statewise));
  },[]);

  // const tracker = "https://data.covid19india.org/data.json";
  return (
    <div className="App">
    <center>
      <h3>Covid Tracker</h3>
      <table className="table table-hover" style={{"width":"60%"}}>
        <thead>
          <tr>
            <th>State</th>
            <th className="table-warning">Confirmed</th>
            <th className="table-primary">Recovered</th>
            <th style={{"backgroundColor":"#ff6666","color":"white"}}>Deaths</th>
            <th className="table-danger">Active</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>{
            return(
              <tr>
                <td>{item.state}</td>
                <td className="table-warning">{item.confirmed}</td>
                <td className="table-primary">{item.recovered}</td>
                <td style={{"backgroundColor":"red","color":"white"}}>{item.deaths}</td>
                <td className="table-danger">{item.active}</td>
                <td>{item.lastupdatedtime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;