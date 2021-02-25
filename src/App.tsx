import React, {useState} from 'react';
import './App.css';
import Board from './Board/Board';
import SetBoard from './SetBoard/SetBoard';

function App() {

    let [count, setCount] = useState<number>(0)
    let [maxCount, setMaxCount] = useState<number>(5)

    let [error1, setError1] = useState<boolean>(false)
    let [error2, setError2] = useState<boolean>(false)

    const incCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    const setCounts = () => {
        setCount(count)
        setMaxCount(maxCount)
    }
    const onChangeCount = (newCount: number) => {
        count = newCount
    }
    const onChangeMaxCount = (newMaxCount: number) => {
        maxCount = newMaxCount
    }

    const setLS = () => {
        localStorage.setItem('counterMinValue', JSON.stringify(count))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxCount))
    }
    const getLS = () => {
        let countString = localStorage.getItem('counterMinValue')
        if(countString) {
            let newCount = JSON.parse(countString)
            setCount(newCount)
        }
        let maxCountString = localStorage.getItem('counterMaxValue')
        if(maxCountString) {
            let newMaxCount = JSON.parse(maxCountString)
            setMaxCount(newMaxCount)
        }
    }
    const clearLS = () => {
        localStorage.clear()
        setCount(0)
    }

    return (
        <div className="App">
            <SetBoard setCounts={setCounts}
                      onChangeCount={onChangeCount}
                      onChangeMaxCount={onChangeMaxCount}
                      error1={error1}
                      error2={error2}
                      setError1={setError1}
                      setError2={setError2}
                      setLS={setLS}
                      getLS={getLS}
                      clearLS={clearLS}/>
            <Board count={count}
                   maxCount={maxCount}
                   incCount={incCount}
                   resetCount={resetCount}
                   error1={error1}
                   error2={error2}/>
        </div>
    );
}

export default App;
