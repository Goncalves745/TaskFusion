import React from 'react';
import Barra from './Barra';
import './MyApp.css';

function grupos() {
  return (
    <>
        <div style={{height: "90%",}}>
            <Barra />
            <main className="page-content">
                <article className="content-article">
                    <br />
                    <br />
                </article>  
            </main>
        </div>
    </>
  );
}

export default grupos;