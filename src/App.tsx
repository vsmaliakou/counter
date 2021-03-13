import React from 'react';
import s from './App.module.css';
import Board from './Board/Board';
import SetBoard from './SetBoard/SetBoard';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from './store';
import {
    IncCountAC,
    ResetCountAC,
    SetCountAC,
    ChangeMinCountAC, ChangeMaxCountAC
} from './counterReducer';

function App() {

    const minCount = useSelector<AppStateType, number>(state => state.counter.minCount)
    const maxCount = useSelector<AppStateType, number>(state => state.counter.maxCount)
    const isEditMode = useSelector<AppStateType, boolean>(state => state.counter.isEditMode)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    const dispatch = useDispatch()

    const incCount = () => {
        dispatch(IncCountAC())
    }
    const resetCount = () => {
        dispatch(ResetCountAC())
    }
    const changeMinCount = (newMinCount: number) => {
        dispatch(ChangeMinCountAC(newMinCount))
    }
    const changeMaxCount = (newMaxCount: number) => {
        dispatch(ChangeMaxCountAC(newMaxCount))
    }
    const setCounts = () => {
        dispatch(SetCountAC())
    }

    return (
        <div className={s.app}>
            <div className={s.container}>
                <SetBoard minCount={minCount}
                          maxCount={maxCount}
                          isEditMode={isEditMode}
                          changeMinCount={changeMinCount}
                          changeMaxCount={changeMaxCount}
                          error={error}
                          setCounts={setCounts}
                />
                <Board minCount={minCount}
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
