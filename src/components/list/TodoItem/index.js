import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import './TodoItem.css';

export const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <BsCheckLg
        className={`Icon Icon-check ${ props.completed && 'Icon-check--active' }`}
        onClick={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <BsFillTrashFill
        className={'Icon Icon-delete'}
        onClick={props.onDelete}
      />
    </li>
  )
}
