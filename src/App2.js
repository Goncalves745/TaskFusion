import './MyApp.css';
import Header from './Header';
import Nav from './Nav';
import Barra from './Barra';
import List from './List';
import Data from './Data';
import Estado from './Estado';
import DatePicker from './DatePicker';
import Grupos from './Grupos';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import MyFeature from "./MyFeature";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App2() {
  
  const query = new URLSearchParams({ id: 1 });
  const [Task, setTask] = React.useState("Task")

  return (
    
<>
    <div style={{height: "90%",}}>
          <Barra />
     
      
      
      <main className="page-content">
        

        <article className="content-article">
            <br />
            <Estado />
            <br />
        </article>      
       
      </main>
      

    </div>
    
    
  </>
  );
  
}

export default App2;