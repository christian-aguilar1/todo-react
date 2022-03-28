import React from "react";

import { useTodos } from "../hooks/useTodos";

import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoItem } from "../components/TodoItem";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton";


function App() {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    dataStatus,
    searchedTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {dataStatus.error && <TodosError error={dataStatus.error} />}
        {dataStatus.loading && new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {(!dataStatus.loading && !searchedTodos.length && !dataStatus.error) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
