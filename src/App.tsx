import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link , NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EmojiPage from "./view/EmojiPage";
import AcorPage from './view/AcorPage';
import FlickrPage from './view/FlickrPage';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <div>
            <h1>Componentes </h1>
          </div>
          <div>
            <ul>
              <li>
                <NavLink to={"/emoji"}>Emojis</NavLink>
              </li>
              <li>
                <NavLink to={"/acordeon"}>acordeon</NavLink>
              </li>
              <li>
                <NavLink to={"/flickr"}>Flickr</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path={"/emoji"} component={EmojiPage} />
        <Route path={"/acordeon"} component={AcorPage}></Route>
        <Route path={"/flickr"} component={FlickrPage} />

      </Switch>
    </Router>
  );
}

export default App;
