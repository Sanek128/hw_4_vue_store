import {TODO_LENGTH, TODOS} from "./types";

export const getters = {
    [TODOS]: state => {
        return state.toDo
    },
    [TODO_LENGTH]: state => {
        return state.toDo.length
    },
}