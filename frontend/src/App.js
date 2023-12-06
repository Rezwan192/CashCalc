// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home_Page/Home";
import Sign_Up from "./pages/Sign_Up_Page/Sign_Up";
import Sign_In from "./pages/Sign_In_Page/Sign_In";
import Forgot_Password from "./pages/Forgot_Password_Page/Forgot_Password";

import NoPage from "./pages/NoPage";
import "./App.css";
import Dashboard from "./pages/Dashboard_Page/Dashboard";

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {
          <Route path="/Dashboard" element={<Dashboard />} />
          /* Add more paths to page files
           <Route path="" element={< X />} />
          <Route path="" element={< Y />} />
          <Route path="" element={< Z />} /> */
        }
        <Route path="*" element={<NoPage />} />
      </Route>
=======
      <Route path="/" element={<Home />} />
      <Route path="sign_up" element={<Sign_Up />} />
      <Route path="sign_in" element={<Sign_In />} />
      <Route path="forgot_password" element={<Forgot_Password />} />
      <Route path="CashCalc/*" element={<Layout />} />
      <Route path="*" element={<NoPage />} />
>>>>>>> 6fdb651eafbe82c36b41b1fc33a8e6f95e0f5fb6
    </Routes>
  );
}

export default App;
