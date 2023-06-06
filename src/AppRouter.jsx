import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/Registration/RegistrationForm";
import Signin from "./components/Signin/SigninForm";
import Employee from "./components/Employee/EmployeeRegistration";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/employeeRegister" element={<Employee />} />

      </Routes>
    </BrowserRouter>
  );
}
