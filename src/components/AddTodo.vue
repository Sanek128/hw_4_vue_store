<template>
    <div>
        <button @click="newT" :class="none" style="margin-right: 3px"> Добавить задачу </button>
        <h2 v-if="x" style = "background-color: red; text-align: center"> !!!  Слишком много задач, выполни что-то  !!! </h2>
        <input v-model = "task" type="text" style="width: 350px" placeholder = "Новая задача">
    </div>
</template>

<script>

    import {todoListModule} from "../store/todolist/todolist";
    import {createNamespacedHelpers} from "vuex";
    import {NEW_TODO, TODO_LENGTH} from "../store/todolist/types";
    // import {TODO_LENGTH} from "../store/todolist/getters";
    // import {TODO_LENGTH} from "../store/todolist/types";

    const {mapActions, mapGetters} = createNamespacedHelpers(todoListModule)

export default {
    name: 'AddTodo',

    data() {
        return {
            task: '',
            x: false
        }
    },

    computed:{
        ...mapGetters({
            todolength: TODO_LENGTH,

        }),
        none() {
            if (this.todolength >= 10)
            {
            return 'none'; 
            }
            else 
                { return ''}
        }
    },

    methods: {
        ...mapActions({
            newTodo: NEW_TODO
        }),
        async newT(){
            const t = {
                task: this.task
            };
            
            if (this.task.length > 0)
                this.x = false;
                console.log(this.x);

            try {
                await this.newTodo(t);
                    console.log(this.task);
                this.task = '';
                    console.log(this.todolength);
                if (this.todolength >= 10) 
                    this.x = true;
                    // this.x = true;
            } catch(e) {
                console.log(e);
            }
        },
    }
}
</script>

<style>

.none {display: none}

</style>
