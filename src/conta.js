import React from 'react';
import Barra from './Barra';
import './MyApp.css';
import ContConta from './contConta';
import {Route} from 'react-router-dom';




function conta() {
  return (
    <>
        <div style={{height: "90%",}}>
            <Barra />
            <main className="page-content">
                <article className="content-article">
                    <br />
                     <ContConta />                                             
                    <br />
                </article>  
            </main>
        </div>
    </>
  );
}

export default conta;