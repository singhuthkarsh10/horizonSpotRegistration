import React, { useState } from 'react';

const DropdownEvent = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onChange(event.target.value); // Pass the selected value to the parent component
    };

    return (
        <div className="dropdown-container">
            <label htmlFor="events">Event:</label>
            <select id="events" value={selectedOption} onChange={handleChange} className="dropdown-select">
                <option value="">Select an event</option>
                <option value="Canvas Carnival">Canvas Carnival</option>
                <option value="Shark Tank">Shark Tank</option>
                <option value="CodeCraft">CodeCraft</option>
                <option value="Tech Trivia">Tech Trivia</option>
                <option value="Capture the Flag">Capture the Flag</option>
                <option value="Mini Hackathon">Mini Hackathon</option>
                <option value="CodeRush">CodeRush</option>
                <option value="Fix-it Fest">Fix-it Fest</option>
                <option value="Design Showcase">Design Showcase</option>
                <option value="TypeRacer">TypeRacer</option>
                <option value="Channel surfing">Channel surfing</option>
                <option value="Adzap ">Adzap</option>
                <option value="Murder mystery">Murder mystery</option>
                <option value="Icy Fun Galore">Icy Fun Galore</option>
                <option value="VisuaLens">VisuaLens</option>
                <option value="CineCraft">CineCraft</option>
            </select>
        </div>
    );
};

export { DropdownEvent };
