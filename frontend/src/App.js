import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home_Page/Home";
import NoPage from "./pages/NoPage";
import Sign_In from "./pages/Sign_In_Page/Sign_In";
import Sign_Up from "./pages/Sign_Up_Page/Sign_Up";
import Forgot_Password from "./pages/Forgot_Password_Page/Forgot_Password";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sign_in" element={<Sign_In />} />
        <Route path="sign_up" element={<Sign_Up />} />
        <Route path="forgot_password" element={<Forgot_Password />} />
        {/* <Route path="signup" element={<Sign_Up />} /> */}
        {/* Add more paths to page files
           <Route path="" element={< X />} />
          <Route path="" element={< Y />} />
          <Route path="" element={< Z />} /> */}

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
