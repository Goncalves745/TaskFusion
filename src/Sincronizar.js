import React from 'react';
import Barra from './Barra';
import './MyApp.css';
import GrupoEstado from './GrupoEstado';
import {Route} from 'react-router-dom';




function Sincronizar() {
  return (
    <>
    {alert('Sincronizado')}   
    {window.location.replace("/")}  
     
    </>
  );
}

export default Sincronizar;