import React, {useState} from 'react';
import './App.css';
import Board from './Board/Board';
import SetBoard from './SetBoard/SetBoard';

function App() {

    let [startCount, setStartCount] = useState<number>(0)
    let [maxCount, setMaxCount] = useState<number>(0)
    let [count, setCount] = useState<number>(0)

    const onChangeMin = (newStartCount: number) => {
        startCount = newStartCount
        setStartCount(startCount)
    }
    const onChangeMax = (newMaxCount: number) => {
        maxCount = newMaxCount
        setMaxCount(maxCount)
    }
    const setCounts = () => {
        count = startCount
        setCount(count)
    }

    const incCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        count = startCount
        setCount(count)
    }

    return (
        <div className="App">
            <Board count={count}
                   maxCount={maxCount}
                   incCount={incCount}
                   resetCount={resetCount}/>
            <SetBoard onChangeMin={onChangeMin}
                      onChangeMax={onChangeMax}
                      setCounts={setCounts}/>
        </div>
    );
}

export default App;
