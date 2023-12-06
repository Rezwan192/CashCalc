// Layout.js
import React from "react";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import "./Layout.css";

import profile from '../assets/images/Profile_Page_icon/Male User.png'
import dashbord from '../assets/images/Navbar_icon/DashBoard.png'
import getStarted from '../assets/images/Navbar_icon/Get_Started.png'
import profile2 from '../assets/images/Navbar_icon/Profile.png'
import budgetPlanning from '../assets/images/Navbar_icon/Budget_Planning.png';

import BudgetPlanning from "./BudgetPlanning/BudgetPlanning";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile_page/Profile"; 

function Layout() {
  return (
    <div className="SideLayout">
      <nav>
<<<<<<< HEAD
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashboard</Link>
        {/*Add more paths to page files
        <Link to="/[path]">Page Name</Link>
        <Link to="/[path]">Page Name</Link>
        <Link to="/[path]">Page Name</Link> */}
      </nav>
=======
        <div className="item1">
          <img src={profile} alt="Profile" height="250px" width="250px"/>
          Username
        </div>
>>>>>>> 6fdb651eafbe82c36b41b1fc33a8e6f95e0f5fb6

        <div className="items">
          <Link to="/CashCalc/" className="linkName">Dashboard </Link>
          <img src={dashbord} alt="Dashboard" />
        </div>

        <div className="items">
          <Link to="/CashCalc/GetStarted" className="linkName">Get Started </Link>
          <img src={getStarted} alt="Dashboard" />
        </div>

        <div className="items">
          <Link to="/CashCalc/BudgetPlanning" className="linkName">Budget Planning </Link>
          <img src={budgetPlanning} alt="Budget Planning" />
        </div>

        <div className="items">
          <Link to="/CashCalc/Profile" className="linkName">Profile </Link>
          <img src={profile2} alt="Profile" />
        </div>

      </nav>
      <div className="MainPart">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="BudgetPlanning" element={<BudgetPlanning />} />
          <Route path="Profile" element={<Profile />} />

        </Routes>
      </div>
    </div>
  );
}

export default Layout;
