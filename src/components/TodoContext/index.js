import React from 'react';

import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {item: todos, saveItem: saveTodos, dataStatus} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
    searchedTodos = searchedTodos.sort((a, b) => +a.completed-b.completed)
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    searchedTodos = searchedTodos.sort((a, b) => +a.completed-b.completed)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    if (newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{
      dataStatus,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      { props.children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };