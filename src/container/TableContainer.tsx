import CustomCheckbox from '../components/CustomCheckbox';
import './TableContainer.css';

const TableContainer = () => {
    return (
        <div className='container'>
            <>
                <div>
                    <CustomCheckbox label='1' />
                    <CustomCheckbox label='1' />
                </div>
                <div>
                    <CustomCheckbox label='1' />
                    <CustomCheckbox label='1' />
                </div>
            </>
        </div>
    );
};

export default TableContainer;

