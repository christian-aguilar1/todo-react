import React from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const onChange = (event) => {
    setError(false);
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(prevState => !prevState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) {
      setError(true);
      return;
    }
    addTodo(newTodoValue);
    onCancel();
  };

  const onKeyUp = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (newTodoValue.length <= 0) {
        setError(true);
        return;
      }
      addTodo(newTodoValue);
      onCancel();
    }
  };

  return (
    <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="TODO a realizar" />
      {error && <p className="TodoForm__p-error" i>El nombre no puede estar vacío</p>}

      <div className="TodoForm__buttonContainer">
        <button type="button" className="TodoForm__button TodoForm__button-cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm__button TodoForm__button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
