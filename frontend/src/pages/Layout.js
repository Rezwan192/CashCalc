import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
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
