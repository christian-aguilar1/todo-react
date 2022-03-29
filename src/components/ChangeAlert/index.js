import React from 'react';
import { withStorageListener } from './withStorageListener';
import "./ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert">
        <div className="ChangeAlert__container">
          <p>Parece que cambiaste tus TODOs en otro pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm__button TodoForm__button--add"
            onClick={toggleShow}
          >
            Refrescar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
