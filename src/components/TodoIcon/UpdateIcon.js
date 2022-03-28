import React from 'react';
import { TodoIcon } from './';

function UpdateIcon({ onUpdate }) {
  return (
    <TodoIcon type="update" onClick={onUpdate} />
  );
}

export { UpdateIcon };
