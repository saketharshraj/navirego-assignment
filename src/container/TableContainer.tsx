import React from 'react';
import CustomCheckbox from '../components/CustomCheckbox';
import './TableContainer.css';
import LetterBox from '../components/LetterBox';

interface TableContainerProps {
    checkboxCount: number;
}

const TableContainer: React.FC<TableContainerProps> = ({ checkboxCount }) => {
    const initialSetupData = Array.from(
        { length: checkboxCount },
        (_, index) => index,
    );
    console.log(initialSetupData);
    return (
        <div className='container'>
            <>
                <div>
                    {initialSetupData.map((num) => {
                        return (
                            <CustomCheckbox
                                key={Math.random().toString() + num.toString()}
                                label={num.toString()}
                            />
                        );
                    })}
                </div>
                <div>
                    <LetterBox checkboxNumber={2} />
                </div>
            </>
        </div>
    );
};

export default TableContainer;

