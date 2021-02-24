import React, {useState} from 'react';
import './App.css';
import Board from './Board';

function App() {

    let [count, setCount] = useState<number>(0)

    const incCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <Board count={count}
                   incCount={incCount}
                   resetCount={resetCount}/>
        </div>
    );
}

export default App;
