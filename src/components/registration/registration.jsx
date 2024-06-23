import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';
import Dropdown from './dropdown';
import { Dropdown_tx } from './dropdown_tx';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { DropdownEvent } from './dropdownEvent';

const Registration = () => {
  const initialFormData = {
    name: '',
    registerNo: '',
    email: '',
    department: '',
    section: '',
    mobileNumber: '',
    dropdownValue: '',
    dropdownEventValue: '',
    dropdownTxValue: '',
    transactionId: ''
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userID = searchParams.get('userID');

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, 'admin': userID, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (value) => {
    setFormData({ ...formData, dropdownValue: value });
  };

  const handleDropdownTxChange = (value) => {
    setFormData({ ...formData, dropdownTxValue: value });
  };

  const handleDropdownEventChange = (value) => {
    setFormData({ ...formData, dropdownEventValue: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://65.0.136.190:5000/api/registration', formData);
      console.log('Registration successful:', response.data);
      toast.success('Registration successful');
      setFormData(initialFormData); // Reset form fields
      setTimeout(() => {
        window.location.reload();
      },);
    } catch (error) {
      console.error('Error registering:', error);
      toast.error('Error registering');
      // Handle error
    }
  };

  return (
    <div className='container1'>
      <div className="header1">
        <div className="text1">Registration</div>
        <div className="underline1"></div>
      </div>
      <div className="inputs1">
        <div className="input3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input1"
          />
        </div>
        <div className="input3">
          <input
            type="text"
            name="registerNo"
            value={formData.registerNo}
            onChange={handleChange}
            placeholder="Register No."
            className="input1"
          />
        </div>
        <div className="input3">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input1"
          />
        </div>
        <div className="input3">
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="input1"
          />
        </div>
        <div className="input3">
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            placeholder="Section"
            className="input1"
          />
        </div>
        <div className="input3">
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="input1"
          />
        </div>
        <div className="dropdown1">
          <Dropdown onChange={handleDropdownChange} />
        </div>
        <div className="dropdown1">
          <Dropdown_tx onChange={handleDropdownTxChange} />
        </div>
        <div className="input3">
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            placeholder="Transaction ID"
            className="input1"
          />
        </div>
      </div>
      <div className="dropdown1">
        <DropdownEvent onChange={handleDropdownEventChange} />
      </div>
      <div className="submitContainer1">
        <div className="submit1" onClick={handleSubmit}>Submit</div>
      </div>
    </div>
  );
};

export { Registration };
