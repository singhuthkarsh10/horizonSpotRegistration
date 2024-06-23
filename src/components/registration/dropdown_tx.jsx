import React, { useState } from 'react';

export const Dropdown_tx = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value); // Pass the selected value to the parent component
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="txoptions">Transaction Type:</label>
            <select id="options" value={selectedOption} onChange={handleChange} className="dropdown-select">
                <option value="">Select an option</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
            </select>
        </div>
    );
}
