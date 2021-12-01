import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contador from './Contador/Controlador';
import Hooks from './Contador/Hooks';
import ToDoList from './formulario/formulario';

const notas=["Amarrilo","Negro"]
ReactDOM.render(
  <React.StrictMode>
    <Contador/>
    <Hooks/>
    <ToDoList array={notas}/>
  </React.StrictMode >,
  document.getElementById('root')
);
