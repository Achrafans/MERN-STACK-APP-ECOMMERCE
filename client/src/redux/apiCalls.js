import { publicRequest, userRequest } from "../requestMethods";
import { addUserFailure, addUserStart, addUserSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login= async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure())
    }

}

export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
      const res = await publicRequest.post(`/auth/register`, user);
      dispatch(addUserSuccess(res.data));
    } catch (err) {
      dispatch(addUserFailure());
    }
  };