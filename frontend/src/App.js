import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./App.css";
//import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more paths to page files
          <Route path="/Dashboard" element={<Dashboard />} />
           <Route path="" element={< X />} />
          <Route path="" element={< Y />} />
          <Route path="" element={< Z />} /> */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
