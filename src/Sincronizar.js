import React from 'react';
import Barra from './Barra';
import './MyApp.css';
import GrupoEstado from './GrupoEstado';
import {Route} from 'react-router-dom';




function Sincronizar() {
  return (
    <>
        <div style={{height: "90%",}}>
            <Barra />
            <main className="page-content">
                <article className="content-article">
                    <br />
                    {alert('Sincronizar')}  
                    {window.location.replace("/")}                                  
                    <br />
                </article>  
            </main>
        </div>
    </>
  );
}

export default Sincronizar;