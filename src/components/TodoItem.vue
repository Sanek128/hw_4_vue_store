<template>
    <div>
        
        <button @click="del(myToDo.id)" style="margin-top: 2px"> Выполено </button>
        {{myToDo.task}}

    </div>
</template>

<script>


import {todoListModule} from "../store/todolist/todolist";
import {createNamespacedHelpers} from "vuex";
import {DEL_TODO} from "../store/todolist/types";

const {mapActions} = createNamespacedHelpers(todoListModule)

    export default {
        name: 'TodoItem',

        props: {
            myToDo: {
                type:Object
            }
        },

        methods:{
            ...mapActions({
                delTodo: DEL_TODO
            }),
            async del(id) {
                try {
                    await this.delTodo(id)
                }catch(e) {
                    console.log(e)
                }
            }
        }
    }
</script>