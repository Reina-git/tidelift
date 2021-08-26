import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lodash from "./components/pages/Lodash";
import Home from "./components/pages/Home";
import AxiosPage from "./components/pages/AxiosPage";
import Uuid from "./components/pages/Uuid";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/npm/lodash" component={Lodash} />
        <Route exact path="/npm/axios" component={AxiosPage} />
        <Route exact path="/npm/uuid" component={Uuid} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
