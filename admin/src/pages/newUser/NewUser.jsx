import { useState } from "react";
import "./newUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";
import axios from "axios";
import { addUserFailure, addUserStart, addUserSuccess } from "../../redux/userRedux";
import {useHistory} from "react-router-dom";

export default function NewUser() {
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const navigate=useHistory();

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
    password:'',
  });

  

  const handleChange= (e)=>{
    setInputs((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
     
    })};
  console.log(inputs);

    const handleClick=(e)=>{
      e.preventDefault();
      const user = { ...inputs };
      addUser(user, dispatch);
      if(addUser){
        alert("New User Add successfully");
        navigate.push("/users");
      }
      
    };

    // const handleClick = async (e) => {
    //   e.preventDefault();
    //   dispatch(addUserStart());
    //   try {
    //     const res = await axios.post("http://localhost:5000/api/users", inputs);
    //     dispatch(addUserSuccess(res.data));
    //     alert("Registration successfully registered");
    //   } catch (err) {
    //     dispatch(addUserFailure());
    //   }
    // };


  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="addProductForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="john" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="john@gmail.com" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password" type="password" placeholder="password" onChange={handleChange} />
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
