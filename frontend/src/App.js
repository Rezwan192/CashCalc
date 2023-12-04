import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home_Page/Home";
import Sign_Up from "./pages/Sign_Up_Page/Sign_Up";
import Sign_In from "./pages/Sign_In_Page/Sign_In";
import Forgot_Password from "./pages/Forgot_Password_Page/Forgot_Password";
// import BudgetPlanning from "./pages/BudgetPlanning";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile_page/Profile";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign_up" element={<Sign_Up />} />
        <Route path="sign_in" element={<Sign_In />} />
        <Route path="forgot_password" element={<Forgot_Password />} />
        {/* <Route path="BudgetPlanning" element={<BudgetPlanning />} />
        <Route path="Dashboard" element={<Dashboard />} /> */}
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
