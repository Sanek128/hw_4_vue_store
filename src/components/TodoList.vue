<template>
    <div>
        <ol>
            <li 
                v-for="(myToDo, index) in todolist" 
                :key="index"
            >
                <TodoItem :myToDo="myToDo"/>
            </li>
        </ol>

    </div>
</template>

<script>

    
    import {todoListModule} from "../store/todolist/todolist";
    import {createNamespacedHelpers} from 'vuex';
    import {TODOS} from "../store/todolist/types";
    import TodoItem from './TodoItem';

    const {mapGetters} = createNamespacedHelpers(todoListModule)

    export default {
        name: 'TodoList',
        components:{
          TodoItem
        },

        computed:{
            ...mapGetters({
                todolist: TODOS
            })
        }
    }
</script>