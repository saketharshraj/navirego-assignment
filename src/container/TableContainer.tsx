import React, { useState } from 'react';
import CustomCheckbox from '../components/CustomCheckbox';
import './TableContainer.css';
import LetterBox from '../components/LetterBox';

interface TableContainerProps {
    checkboxCount: number;
}

const TableContainer: React.FC<TableContainerProps> = ({ checkboxCount }) => {
    const [checkedIndices, setCheckedIndices] = useState<number[]>([]);

    const handleCheckboxChange = (index: number) => {
        setCheckedIndices((prev) => {
            const currentIndex = prev.indexOf(index);
            if (currentIndex === -1) {
                // Checkbox is being checked, add it to the array
                return [...prev, index];
            } else {
                // Checkbox is being unchecked, remove it from the array
                return prev.filter((i) => i !== index);
            }
        });
    };

    return (
        <div className='container'>
            <div>
                {Array.from({ length: checkboxCount }, (_, i) => i).map(
                    (index) => (
                        <CustomCheckbox
                            key={index}
                            label={index.toString()}
                            isChecked={checkedIndices.includes(index)}
                            onCheckboxChange={() => handleCheckboxChange(index)}
                        />
                    ),
                )}
            </div>
            <div>
                {checkedIndices.length ? (
                    <>
                        {checkedIndices.map((index) => {
                            return <LetterBox key={index} checkboxNumber={index} />;
                        })}
                    </>
                ) : (
                    <div style={{ width: '240px' }}>Click at-least one check box to start loading letters from the Letters API</div>
                )}
            </div>
        </div>
    );
};

export default TableContainer;

