import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos: [
        {
          isDone: false,
          text: 'Todo in Pinia Store!',
        },
      ],
    }
  },
})
