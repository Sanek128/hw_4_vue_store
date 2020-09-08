import {NEW_TODO, GET_TODO, PUSH_TODOS, DEL_TODO, SET_TODO} from "./types";
import Vue from 'vue'

export const actions = {

    [DEL_TODO]: async ({commit}, id) => {
        try {
            await Vue.http.delete(`https://hw-3-vue-firebase.firebaseio.com/myToDoList/${id}.json`);
            commit(DEL_TODO, id)
            
        } catch (e) {
            console.log(e)
        }
    },

    [NEW_TODO]: async ({commit}, toDoT) => {
        try {
            const {body: {name}} =  await Vue.http.post('https://hw-3-vue-firebase.firebaseio.com/myToDoList.json', toDoT);
            const toDoItem = {...toDoT, id: name};
            commit(SET_TODO, toDoItem)

        } catch (e) {
            console.log(e)
        }
    },
    [GET_TODO]: async ({commit}) => {
        try {
            const todos = [];
            const {body} = await Vue.http.get('https://hw-3-vue-firebase.firebaseio.com/myToDoList.json')
            for (const item in body) {
                todos.push({...body[item], id: item})
            }
            commit(PUSH_TODOS, todos)
        } catch(e) {
            console.log(e)
        }
    },
}