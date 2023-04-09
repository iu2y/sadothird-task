<script>
import TodoAdd from '@/components/components/TodoAdd.vue'
import TodoList from '@/components/components/TodoList.vue'
import { useTodosStore } from '@/stores/todos'

export default {
  components: {
    TodoAdd,
    TodoList,
  },
  computed: {
    todos() {
    return useTodosStore().todos;
    }
  },
  methods: {
    addTodo(newTodoText) {
      if (!newTodoText) return alert('文字を入力してください')
      const store = useTodosStore();
      store.todos.push({
        isDone: false,
        text: newTodoText,
      });
    },
    clearDoneTodos() {
      const store = useTodosStore();
      store.todos = store.todos.filter((todo) => !todo.isDone);
    },
  },
}
</script>

<template>
  <TodoAdd @delete-done="clearDoneTodos" @add-todo="addTodo" />
  <p v-if="todos.length === 0">ToDoがまだありません！</p>
  <TodoList v-else :todos="todos" />
</template>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
