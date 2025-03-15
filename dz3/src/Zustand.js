import create from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(persist(
  (set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, { id: Date.now(), text: todo, completed: false }] })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    toggleTodo: (id) => set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),
    editTodo: (id, newText) => set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    })),
    filter: 'all', 
    setFilter: (filter) => set({ filter })
  }),
  {
    name: "todos-storage", 
    getStorage: () => localStorage, 
  }
));
