import React from "react";

import { useTodos } from "../hooks/useTodos";

import { TodoHeader } from '../components/header/TodoHeader';
import { TodoCounter } from "../components/header/TodoCounter";
import { TodoSearch } from "../components/header/TodoSearch";

import { TodoList } from "../components/list/TodoList";
import { TodoItem } from "../components/list/TodoItem";

import { TodosError } from '../components/UXInfo/TodosError';
import { TodosLoading } from '../components/UXInfo/TodosLoading';
import { EmptyTodos } from '../components/UXInfo/EmptyTodos';
import { EmptySearchResults } from "../components/UXInfo/EmptySearchResults";

import { Modal } from "../components/form/Modal";
import { TodoForm } from "../components/form/TodoForm";

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
      <TodoHeader loading={dataStatus.loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={dataStatus.error}
        loading={dataStatus.loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}

        onError={() => <TodosError />}
        onLoading={() => new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText}/>}
        // render={ todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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
