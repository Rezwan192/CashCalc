import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css";
import Profile from "./pages/Profile_page/Profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Profile/>} />

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
