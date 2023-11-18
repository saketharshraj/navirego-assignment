// CustomCheckbox.tsx
import React, { useState } from 'react';
import './CustomCheckbox.css'; // Import the CSS file for styles

interface CustomCheckboxProps {
    label: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className='checkbox-container'>
            {label}
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className='checkmark'></span>
        </label>
    );
};

export default CustomCheckbox;

