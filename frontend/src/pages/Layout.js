import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

import profile from '../assets/images/Profile_Page_icon/Male User.png'
import dashbord from '../assets/images/Navbar_icon/DashBoard.png'
import getStarted from '../assets/images/Navbar_icon/Get_Started.png'
import profile2 from '../assets/images/Navbar_icon/Profile.png'
import budgetPlanning from '../assets/images/Navbar_icon/Budget_Planning.png'

function Layout() {
  return (
    <div className="SideLayout">
      <nav>
        <div className="item1">
        <img src={profile}></img>
        Username
        </div>

        <div className="items">
        <Link to="/">Dashboard </Link>
        <img src={dashbord}></img>
        </div>
        <div className="items">
        <Link to="/">Get Started </Link>
        <img src={getStarted}></img>
        </div>
        <div className="items">
        <Link to="/">Budget Planning </Link>
        <img src={budgetPlanning}></img>
        </div>
        <div className="items">
        <Link to="/">Profile </Link>
        <img src = {profile2}></img>
        </div>

      </nav>
      <div className="MainPart">

      <Outlet />
      </div>
    </div>
  );
}

export default Layout;
