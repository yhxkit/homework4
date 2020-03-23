import React, { Component } from "react";
import Main from "./Main";
import Profile from "./Profile";
import Fortune from "./Fortune";
import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/fortune/:name&:birthday" component={Fortune} />
          <Route render={() => <div>404 Not Found</div>} />
        </Switch>

        <Link id="main-link" to="/main">
          main
        </Link>
      </div>
    );
  }
}

export default App;
