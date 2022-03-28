import React from 'react';
import './TodoList.css';

export const TodoList = (props) => {
  return (
    <section className="TodoList__container">
      <ul>
        { props.error && props.onError() }
        { props.loading && props.onLoading() }
        { (!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos() }
        { (!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText) }

        { props.searchedTodos.map(props.render || props.children) }
      </ul>
    </section>
  )
}

