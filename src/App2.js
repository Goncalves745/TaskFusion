import './MyApp.css';
import Header from './Header';
import Nav from './Nav';
import Barra from './Barra';
import List from './List';
import Data from './Data';



import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import MyFeature from "./MyFeature";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App2() {

  function handleSubmit(e) {
    
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    /*fetch('/some-api', { method: form.method, body: formData });*/

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    //console.log(formJson);
    console.log(formJson);
    //alert(formData.entries());
    alert(e.target.myInput.value);
  }

  const query = new URLSearchParams({ id: 1 });
  const [Task, setTask] = React.useState("Task")

  return (
    
<>
    <div style={{height: "90%",}}>
       <Barra />
          <Routes>

            <Route path='/' />
            
          </Routes>
      
      {/*<Header /> <--- barra superior anteriro */} 
      <main className="page-content">
     
        <Nav>
          <h1>Navigation</h1>
            <p>
                {/*<Link to={`echo/${id}`}>List</Link>*/}
                <Link to={`list?${query.toString()}`} query={query}>List</Link>
            </p>
        </Nav>
        <article className="content-article">
          <h1>TASK</h1>
          <br />
            <textarea id="areaTask" rows="20" cols="100" style={{justifyContent: "left", textAlign: "left",marginTop: '8px'}}>
              {/*value={Task}*/}
              {/*onChange={(e) => setTask(e.target.value)}*/}
            </textarea>
            <br />
            <div style={{textAlign:'right'}}>
              <button type='Cancel' style={{marginRight: '8px'}}>Cancel</button>
              <button type='Done'>Done</button>
            </div>
        </article>
        <aside className="content-sidebar">
          <h1>Sidebar</h1>
          <br />
          <List />
        </aside>
      </main>
      
      <footer className="page-footer">
      <h1>Footer E</h1>
      <h1>Footer D</h1>        
    </footer>
    </div>
    
    
  </>
  );
  
}

export default App2;