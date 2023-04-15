import { loginStart,loginSuccess,loginFaliure } from "./userSlice";
import { publicRequest } from "../requestMethod";

export const login = async(dispatch,user)=>{
    dispatch(loginStart());
    try{
     const res = await publicRequest.post("/auth/login",user);
     dispatch(loginSuccess(res.data));
    }catch(err){
     dispatch(loginFaliure());
    }
}