import React from 'react';

import { TodoContext } from '../components/TodoContext';

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/Modal";

function AppUI() {
  const {dataStatus, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {dataStatus.error && <TodosError error={dataStatus.error} />}
        {dataStatus.loading && new Array(4).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {(!dataStatus.loading && !searchedTodos.length && !dataStatus.error) && <EmptyTodos />}

        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )) }
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };