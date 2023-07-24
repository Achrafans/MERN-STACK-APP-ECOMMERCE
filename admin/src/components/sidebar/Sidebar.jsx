import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  ArrowCircleRightIcon,
  ArrowBack,
  AddCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
  const navigate=useHistory();

  const handleClick=()=>{
   navigate.push("/login");   
  }


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/analytics" className="link">
            <li  className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            <Link to="/sales" className="link">
            <li  className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebarListItem">
                <AddCircle className="sidebarIcon" />
                Add User
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                <AddCircle className="sidebarIcon" />
                Add Product
              </li>
            </Link>
            <h3 className="sidebarTitle">------</h3>
            <li className="sidebarListItem">
              <ArrowBack className="sidebarIcon" />
             <a className="sidebarListItem link" href="/login" onClick={handleClick}  >Logout</a>
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}
