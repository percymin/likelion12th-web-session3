/* Login.js */

import React, { useState } from "react";
import "./Login.css";
import { UserInfo } from "./UserInfo"; 

const Login = ({ handleLogin }) => { 
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        if (id === UserInfo.id && password === UserInfo.password) { 
        handleLogin(); 
        } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다."); 
        }
    };

    return (
        <div className="wrapper_box">
            <h2>LOG IN</h2>
        <form className="login_form" onSubmit={handleSubmit}> 
            <input type="text" className="login_input" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} /> 
            <input placeholder="Password" type="Password" className="login_input" value={password} onChange={(e) => setPassword(e.target.value)} />  
            <button type="submit" className="login_btn">
                Login
            </button>
            </form>
        </div>
    );
};

export default Login;