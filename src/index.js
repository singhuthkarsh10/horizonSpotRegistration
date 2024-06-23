import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Ensure this path is correct
import { Login } from './components/login';
import { Registration } from './components/registration/registration';
import './index.css';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
