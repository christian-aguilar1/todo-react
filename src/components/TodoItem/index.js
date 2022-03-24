import React from 'react';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

export const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${ props.completed && 'Icon-check--active' }`}
        onClick={props.onComplete}
      >
        ᄼ
      </span>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  )
}
