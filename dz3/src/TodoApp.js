import React, { useState } from 'react';
import useTodoStore from './store';

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo, filter, setFilter } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');
  const [editText, setEditText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleEditTodo = (id) => {
    setEditText(todos.find(todo => todo.id === id)?.text || '');
    setEditingId(id);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      editTodo(editingId, editText);
      setEditingId(null);
      setEditText('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all'
  });

  return (
    <div>
      <h1>ToDo App</h1>
      
      {}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Добавьте задачу"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      {}
      <div>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('completed')}>Выполненные</button>
        <button onClick={() => setFilter('incomplete')}>Невыполненные</button>
      </div>

      {}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Сохранить</button>
                <button onClick={() => setEditingId(null)}>Отменить</button>
              </div>
            ) : (
              <div>
                <span
                  onClick={() => toggleTodo(todo.id)}
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleEditTodo(todo.id)}>Редактировать</button>
                <button onClick={() => removeTodo(todo.id)}>Удалить</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
