import React from "react";

import AppRouter from "../../AppRouter";

export default function Navbar(){
    return (
        <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="http://localhost:5173">Employee Management</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:5173">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:5173/signin">Sign In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:5173/employeeRegister">Add Employee</a>
      </li>
    </ul>
  </div>
</nav>



<AppRouter />
        
        </>



    )
}