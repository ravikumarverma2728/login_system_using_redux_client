import { ActionTypes } from "../constants/actionTypes";
export const SET_USER_LOGIN = (user) =>{
    return {
        type : ActionTypes.SET_USER_LOGIN,
        payload : user, 
    };
};
export const REMOVE_USER_LOGIN = () =>{
    return {
        type : ActionTypes.REMOVE_USER_LOGIN,
    };
};