import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import '../Css/Login.css'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { SET_USER_LOGIN } from "../Redux/actions/usersLoginActions";
import { REMOVE_USER_LOGIN } from "../Redux/actions/usersLoginActions";
const Login = () => {
    const users = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        axios
            .post("http://localhost:8000/users/login", data, {
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
                dispatch(SET_USER_LOGIN(userInfromation));
            });
    };
    const logout = () => {
            dispatch(REMOVE_USER_LOGIN());
    };
    console.log(users);
   if(users.state && users.state.userloggedIn){
    console.log("You are logged in");
   }
   else{
         console.log("You are not logged in");
    }
// if(users && users.userDetails.userloggedIn){
//     alert("You are logged in");
// }
    return (
        <>
            <div className="container-fluid  ">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10  border colA ">

                        <img src="avatar2.png" className="avatar" />
                        <h1 className="text-center"> Login Here
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Email</p>
                            <input type="email" name="" placeholder="Enter email" {...register("email", { required: { value: true, message: "Please enter your email" } })} />
                            <p>Password</p>
                            <input type="Password" name="" placeholder="Enter password" {...register('password', { required: { value: true, message: "Please enter your password" } })} />
                            <input type="submit" name="" value="Login" />
                            <a href="#">Lost your password?</a><br />
                            <a href="#">Don't have an account?</a>
                        </form>
                    </div>

                </div>
                <br /><br />
            </div>
            <button onClick={logout} type='button'>Log Out</button>
        </>
    );
};

export default Login;
