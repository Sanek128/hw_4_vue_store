import {DEL_TODO, SET_TODO, PUSH_TODOS} from "./types";

export const mutations = {
    [SET_TODO]: (state, toDoT) => {
        state.toDo.push(toDoT);
    },
    [PUSH_TODOS]:(state, todos) => {
        state.toDo = todos
    },
    [DEL_TODO]:(state, id) => {
        state.toDo = state.toDo.filter(e => e.id !== id)
    }
}