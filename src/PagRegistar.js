import React from 'react';
import Barra from './Barra';
import './MyApp.css';
import ContRegistar from './contRegistar';
import {Route} from 'react-router-dom';




function conta() {
  return (
    <>
        <div style={{height: "90%",}}>
            <Barra />
            <main className="page-content">
                <article className="content-article">
                    <br />
                     <ContRegistar />                                             
                    <br />
                </article>  
            </main>
        </div>
    </>
  );
}

export default conta;