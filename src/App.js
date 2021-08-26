import React from "react";
import "./style/master.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Package from "./components/ui/Package";

function App() {
  return (
    <Router>
      <Switch>
        {/* react router has difficulty reloading the current component when the url changes */}
        {/* https://stackoverflow.com/questions/47792328/reload-component-via-link-in-react-router/57758200#57758200 */}
        <Redirect
          from="/:platform/:project/reload"
          to="/:platform/:project"
          component={Package}
        />
        <Route path="/:platform/:project" component={Package} />

        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
