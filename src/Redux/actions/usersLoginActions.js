import { ActionTypes } from "../constants/actionTypes";
import axios from "axios";

export const SET_USER_LOGIN =  (data) =>{
            return async (dispatch) => {
                await axios.post("http://localhost:8000/users/login", data, {
                })
                .then(function (response) {

                    const userInfromation = {
                        id: response.data._id,
                        name: response.data.name,
                        email: response.data.email,
                        token: response.data.authToken,
                        userloggedIn: true,
                    };
                    console.log(userInfromation);
                    dispatch({type:ActionTypes.SET_USER_LOGIN,payload:userInfromation});
                });
            }
};
export const REMOVE_USER_LOGIN = () =>{
    return {
        type : ActionTypes.REMOVE_USER_LOGIN,
    };
};