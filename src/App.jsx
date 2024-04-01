import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "StudentApp1/StudentForm";
import 'bootstrap/dist/css/bootstrap.css';


import "./index.css";

const App = () => (
  <div className="container">
    <header style={{ backgroundColor: "black", color: "white" }}>StudentApp3</header> 
    <StudentForm />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
