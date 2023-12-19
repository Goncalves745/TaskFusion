import './MyApp.css';
import Header from './Header';
import Nav from './Nav';
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

  const id = "1";
  const query = new URLSearchParams({ id: 1 });

  return (

    <div style={{height: "90%",}}>
      <Header />
      <main className="page-content">
        <Nav>
          <h1>Navigation</h1>

            <p>
                {/*<Link to={`echo/${id}`}>List</Link>*/}
                <Link to={`list?${query.toString()}`} query={query}>List</Link>
            </p>

        </Nav>
        <article className="content-article">
          <h1>Main Content</h1>
          <br />
          <form method="post" className='Form-sub' onSubmit={handleSubmit}>
            <label>
              Text input: <input name="myInput" defaultValue="Some initial value" />
            </label>
            <hr />
            <label>
              Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
            </label>
            <hr />
            <p>
              Radio buttons:
              <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
              <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
              <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
            </p>
            <hr />
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
          </form>

          <List />

          <div style={{justifyContent: "left", textAlign: "left",}}>
            <Data />         
          </div>

          <div style={{justifyContent: "left", textAlign: "left",}}>
            <MyFeature
                addArticle={({
                    title,
                    summary,
                    onChangeTitle,
                    onChangeSummary,
                    onClickAdd,
                }) => (
                    <AddArticle
                    name="Articles"
                    title={title}
                    summary={summary}
                    onChangeTitle={onChangeTitle}
                    onChangeSummary={onChangeSummary}
                    onClickAdd={onClickAdd}
                    />
                )}
                articleList={({ articles, onClickToggle, onClickRemove }) => (
                    <ArticleList
                    articles={articles}
                    onClickToggle={onClickToggle}
                    onClickRemove={onClickRemove}
                    />
                )}
            />
          </div>
        </article>

        <aside className="content-sidebar">
          <h1>Sidebar</h1>
        </aside>
      </main>

      <footer className="page-footer">
        <h1>Footer E</h1>
        <h1>Footer D</h1>        
      </footer>
    </div>
  );
}

export default App2;