import { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './ts_modal/todoModal';

function App() {
  const defaultTodos: Todo[] = [
    { id: 't0', text: 'Learn React' },
    { id: 't1', text: 'Finish the course' }
  ];

  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, { id: Math.random().toString(), text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  )
}

export default App
