import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

// Pages
import Home from './pages/Home';
import Search from './pages/Search';

const App:React.FC = () => {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </BrowserRouter>
      )
};

export default App;