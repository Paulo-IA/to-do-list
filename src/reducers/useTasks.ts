import { useReducer } from "react"
import { v4 as uuidv4 } from "uuid";
import { removeInsert } from "../helpers/dataManipulation";
import { ActionType } from "../Types/ListActionType"
import { Task } from "../Types/TaskType";

const initialValue: Task[] = []

const reducer = (state: Task[], action: ActionType) => {
    switch(action.type) {
        case "ADD":
            if (action.payload?.task) {
                const newState = [...state]
                newState.push({
                    task: action.payload?.task,
                    complete: false,
                    id: uuidv4()
                })
                return newState
            }
        break;
        case "DEL":
            if (action.payload?.id) {
                let newState = [...state]
                newState = newState.filter(task => task.id !== action.payload?.id)
                return newState
            }
        break;
        case "COMPLETE":
            if (action.payload?.id) {
                if (action.payload.complete === false) {
                    action.payload.complete = true
                    return removeInsert(state, action, true)
                } else {
                    action.payload.complete = false

                    return removeInsert(state, action, false)
                }
            }
        break;
        case "ORDER":
            let newState = [...state]
            //@ts-ignore
            newState = newState.sort((a, b) => a.complete - b.complete)
            return newState
        break;
    }
    return state;
}

export const useTasks = () => {
    return useReducer(reducer, initialValue)
}