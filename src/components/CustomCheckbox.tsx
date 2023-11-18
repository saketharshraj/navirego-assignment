import './CustomCheckbox.css';

interface CustomCheckboxProps {
    label: string;
    isChecked: boolean;
    onCheckboxChange: (isChecked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, isChecked, onCheckboxChange }) => {
    return (
        <label className='checkbox-container'>
            {label}
            <input
                type='checkbox'
                checked={isChecked}
                onChange={() => onCheckboxChange(!isChecked)}
            />
            <span className='checkmark'></span>
        </label>
    );
};

export default CustomCheckbox;
