import React from 'react';
import './TodoIcon.css';
import { ReactComponent as Trash } from './trash.svg';

const iconTypes = {
  "delete": color => (<Trash className="Icon-svg Icon-svg--delete" fill={color} />)
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon__container Icon__container--${type}`} onClick={onClick}>
      { iconTypes[type](color) }
    </span>
  );
}

export { TodoIcon };
