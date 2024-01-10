import './MyApp.css';
import Header from './Header';
import Nav from './Nav';
import List from './List';
import Data from './Data';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App2 from './App2';

import Reports from './reports';


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import MyFeature from "./MyFeature";

export default () => (
  <Router>
    <Routes>     
      <Route path="/" element={<App2 />} />
      <Route path='/reports' element={<Reports />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </Router>
);
