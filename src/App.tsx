import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Board from './Board/Board';
import SetBoard from './SetBoard/SetBoard';

function App() {

    let [minCount, setMinCount] = useState<number>(0)
    let [maxCount, setMaxCount] = useState<number>(5)
    let [count, setCount] = useState<number>(minCount)

    let [error, setError] = useState<boolean>(false)

    let [isEditMode, setIsEditMode] = useState<boolean>(false)

    useEffect(() => {
        let minCountString = localStorage.getItem('counterMinValue')
        if(minCountString) {
            let newMinCount = JSON.parse(minCountString)
            setMinCount(newMinCount)
        }
        let maxCountString = localStorage.getItem('counterMaxValue')
        if(maxCountString) {
            let newMaxCount = JSON.parse(maxCountString)
            setMaxCount(newMaxCount)
        }
    }, [])
    const saveLocalStorage = () => {
        localStorage.setItem('counterMinValue', JSON.stringify(minCount))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxCount))
    }

    const incCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minCount)
    }

    const setCounts = () => {
        if(minCount < maxCount) {
            setIsEditMode(false)
            setMinCount(minCount)
            setMaxCount(maxCount)
            setCount(minCount)
            saveLocalStorage()
        } else {
            setError(true)
        }
    }
    const onChangeMinCount = (newMinCount: number) => {
        setIsEditMode(true)
        setMinCount(newMinCount)
    }
    const onChangeMaxCount = (newMaxCount: number) => {
        setIsEditMode(true)
        setMaxCount(newMaxCount)
    }

    return (
        <div className={s.app}>
            <div className={s.container}>
                <SetBoard minCount={minCount}
                          maxCount={maxCount}
                          setCounts={setCounts}
                          onChangeMinCount={onChangeMinCount}
                          onChangeMaxCount={onChangeMaxCount}
                          error={error}
                          setError={setError}
                          isEditMode={isEditMode}
                />
                <Board count={count}
                       maxCount={maxCount}
                       incCount={incCount}
                       resetCount={resetCount}
                       error={error}
                       isEditMode={isEditMode}
                />
            </div>
        </div>
    );
}

export default App;
