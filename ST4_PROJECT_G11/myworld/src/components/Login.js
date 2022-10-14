import React, { useState } from 'react'
import './Login.css';
//import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleApi = () => {
        console.log({email,password})
        axios.post('http://localhost:3000/login',{
            email: email,
            password: password
        })
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div className="login-wrapper">
            <form action="" className="form" >
                <h2>Login</h2>
                <div className="input-group">
                    <input value={email} onChange={handleEmail} type="text" name="loginUser" id="loginUser" required />
                    <label  htmlFor="loginUser">User Name</label>
                </div>
                <div className="input-group">
                    <input type="password" name="loginPassword" id="loginPassword" required />
                    <label value={password} onChange={handlePassword} htmlFor="loginPassword">Password</label>
                </div>

                <input onClick={handleApi} type="submit" value="Login" className="submit-btn" />
            </form>
        </div>

    )
}

export default Login