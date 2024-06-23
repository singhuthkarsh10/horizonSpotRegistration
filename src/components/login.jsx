import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Registration } from './registration/registration';


import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserIDChange = (e) => {
        setUserID(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://65.0.136.190:5000/api/login', {
                userID: userID,
                password: password
            });
            console.log('Login successful:', response.data);
            // Redirect to registration page upon successful login
            if (response.status === 200) {
                navigate(`/registration?userID=${encodeURIComponent(userID)}`);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" value={userID} onChange={handleUserIDChange} placeholder='UserID' className="input1" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' className="input1" />
                </div>
            </div>
            <div className="submitContainer">
                <div className="submit" onClick={handleSubmit}>Login</div>
            </div>
        </div>
    );
};

export { Login };
