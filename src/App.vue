<template>
  <div id="toDo">
    <h3 style="text-align: center"> MY TO DO LIST </h3>
    <TodoList/>
    <AddTodo/>
  </div>
</template>

<script>

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import {GET_TODO} from './store/todolist/types';
import {todoListModule} from './store/todolist/todolist';

export default {
  name: 'App',
  data() {
    return {
      // x: false,
    }
  },

  components: {
    AddTodo,
    TodoList,
  },

  async beforeMount() {
    try {
      await this.$store.dispatch(`${todoListModule}/${GET_TODO}`)
    } catch(e) {
      console.log(e)
    }
  }
}
</script>

<style>

.none {display: none}

#toDo {
  width: 500px;
  box-shadow: 0 3px 20px #0f0f0f23;
  padding: 10px;
  margin: 20px 0 0 20px;
}

</style>
