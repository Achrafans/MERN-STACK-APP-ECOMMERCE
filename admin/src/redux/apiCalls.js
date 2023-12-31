import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { addUserFailure, addUserStart, addUserSuccess, deleteUserFailure, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, loginFailure, loginStart, loginSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./userRedux"

export const login= async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure());
    }

}
export const getProducts= async (dispatch)=>{
    dispatch(getProductStart());
    try{
        const res= await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));

    }catch(err){
        dispatch(getProductFailure());
    }

}
export const deleteProduct= async (id, dispatch)=>{
    dispatch(deleteProductStart());
    try{
        const res= await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));

    }catch(err){
        dispatch(deleteProductFailure());
    }

}
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
       const res= await userRequest.put(`/products/${id}`, product);
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
  
  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };
  ////////////////////////////////
  export const getUsers= async (dispatch)=>{
    dispatch(getUserStart());
    try{
        const res= await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));

    }catch(err){
        dispatch(getUserFailure());
    }

}
export const deleteUser= async (id, dispatch)=>{
  dispatch(deleteProductStart());
  try{
      //const res= await userRequest.delete(`/user/${id}`);
      dispatch(deleteUserSuccess(id));

  }catch(err){
      dispatch(deleteUserFailure());
  }

}

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/users`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
     const res= await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

