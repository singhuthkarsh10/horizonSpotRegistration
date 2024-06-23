import React, { useState } from 'react';
import './dropdown.css'; // Import the CSS file

const Dropdown = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value); // Pass the selected value to the parent component
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="options">Year:</label>
            <select id="options" value={selectedOption} onChange={handleChange} className="dropdown-select">
                <option value="">Select an option</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
            </select>
        </div>
    );
};

export default Dropdown;
