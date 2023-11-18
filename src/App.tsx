import './App.css';
import { CHECKBOX_COUNT } from './config';
import TableContainer from './container/TableContainer';

function App() {

    return (
        <div className='App'>
            <TableContainer checkboxCount={CHECKBOX_COUNT}/>
        </div>
    );
}

export default App;

