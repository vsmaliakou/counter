export type ActionType = ReturnType<typeof IncCountAC>
    | ReturnType<typeof ResetCountAC>
    | ReturnType<typeof ChangeMinCountAC>
    | ReturnType<typeof ChangeMaxCountAC>
    | ReturnType<typeof SetCountAC>

type InitialStateType = typeof initialState

const initialState = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    isEditMode: false,
    error: false,
    isDataEntering: false
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNT":
            return {
                ...state,
                count: state.count + 1,
            }
        case "RESET-COUNT":
            return {
                ...state,
                count: state.minCount
            }
        case "CHANGE-MIN-COUNT": {
            let stateCopy = {...state}
            stateCopy.minCount = action.newMinCount
            stateCopy.isEditMode = true
            stateCopy.isDataEntering = true
            stateCopy.error = action.newMinCount >= stateCopy.maxCount || action.newMinCount < 0 ? true : false
            return stateCopy
        }
        case "CHANGE-MAX-COUNT": {
            let stateCopy = {...state}
            stateCopy.maxCount = action.newMaxCount
            stateCopy.isEditMode = true
            stateCopy.isDataEntering = true
            stateCopy.error = action.newMaxCount <= stateCopy.minCount || action.newMaxCount < 0 ? true : false
            return stateCopy
        }
        case "SET-COUNT": {
            let stateCopy = {...state}
            if (stateCopy.minCount < stateCopy.maxCount) {
                stateCopy.isEditMode = false
                stateCopy.isDataEntering = false
                stateCopy.minCount = state.minCount
                stateCopy.maxCount = state.maxCount
                stateCopy.count = state.minCount
            } else {
                stateCopy.error = true
            }
            return stateCopy
        }

        default:
            return state
    }
}

export const IncCountAC = () => ({type: 'INC-COUNT'} as const)
export const ResetCountAC = () => ({type: 'RESET-COUNT'} as const)
export const ChangeMinCountAC = (newMinCount: number) => ({type: 'CHANGE-MIN-COUNT', newMinCount} as const)
export const ChangeMaxCountAC = (newMaxCount: number) => ({type: 'CHANGE-MAX-COUNT', newMaxCount} as const)
export const SetCountAC = () => ({type: 'SET-COUNT'} as const)