import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { useState } from "react";

export default function User() {
  const location = useLocation();
  const userId= location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate=useHistory();

  const user = useSelector((state) =>
  state.user.users.find((user) => user._id === userId)
);

const [inputs, setInputs] = useState(user);

const handleChange= (e)=>{
  setInputs((prev)=>{
    return {...prev, [e.target.name]: e.target.value}
   
  })};
console.log(inputs);


const handleUpdate=(e)=>{
  e.preventDefault();
  const user={...inputs};

  updateUser(userId,user,dispatch);
  if(updateUser){
    navigate.push("/users");
  }
  
}

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} 
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span  className="userShowUsername">{user.username}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            {/* <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div> */}
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">ID: {user._id}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>

          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={handleChange} 
                />
              </div>
      
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                name="email"
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={handleChange} 
                />
              </div>

              <div className="userUpdateItem">
                <label>isAdmin</label>
                <input
                name="isAdmin"
                  type="text"
                  value={user.isAdmin}
                  className="userUpdateInput"
                  onChange={handleChange} 
                />
              </div>
            
              <div className="userUpdateItem">
                <label>Id</label>
                <input disabled
                  type="text"
                  placeholder={user._id}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img

                  className="userUpdateImg"
                  src={user.img ||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" }
                  alt=""
                />
               
              </div>
              <button onClick={handleUpdate} className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
