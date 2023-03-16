import { ActionType } from "../Types/ListActionType"
import { Task } from "../Types/TaskType"

export const removeInsert = (state: Task[], action: ActionType, isComplete: boolean) => {
    let task = state.find(item => item.id === action.payload?.id)!
    let taskTitle = task.task

    let newState = [...state]
    newState = newState.filter(task => task.id !== action.payload?.id)

    newState.push({
        task: taskTitle,
        complete: isComplete,
        //@ts-ignore
        id: action.payload?.id
    })
    return newState
}