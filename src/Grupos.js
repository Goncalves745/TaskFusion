import React from 'react';
import Barra from './Barra';
import './MyApp.css';
import GrupoEstado from './GrupoEstado';
import GrupoHome from './GrupoHome';

function grupos() {
  return (
    <>
        <div style={{height: "90%",}}>
            <Barra />
            <main className="page-content">
                <article className="content-article">
                    <br />
                    <GrupoEstado />
                    <br />
                </article>  
            </main>
        </div>
    </>
  );
}

export default grupos;