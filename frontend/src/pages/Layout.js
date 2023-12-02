import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to ="/GetStarted" id = "links">Get Started</Link>
        <Link to= "/BudgetPlanning" id= "links">Budget Planning</Link>
        <Link to= "/Profile" id= "links">Profile</Link>
        {/*Add more paths to page files
        <Link to="/[path]">Page Name</Link>
        <Link to="/[path]">Page Name</Link>
        <Link to="/[path]">Page Name</Link> */}
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
