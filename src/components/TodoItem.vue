<template>
    <div>
        
        <button @click="del(myToDo.id)" style="margin-top: 2px"> Выполено </button>
        {{myToDo.task}}

    </div>
</template>

<script>


import {todoListModule} from "../store/todolist/todolist";
import {createNamespacedHelpers} from "vuex";
import {DEL_TODO, TODO_LENGTH} from "../store/todolist/types";

const {mapActions, mapGetters} = createNamespacedHelpers(todoListModule)

    export default {
        name: 'TodoItem',

        props: {
            myToDo: {
                type: Object
            },
        },

        computed:{
            ...mapGetters({
                todolength: TODO_LENGTH,
            })
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