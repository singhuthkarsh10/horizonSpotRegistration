import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser(formData);
        console.log('User registered:', response);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
