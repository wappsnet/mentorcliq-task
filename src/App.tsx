import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Storage from "storage";
import history from "helpers/history";
import Register from "pages/register";
import AuthProvider from "components/AuthProvider";
import Login from "pages/login";
import Profile from "pages/profile";
import Home from "pages/home";

function App() {
  return (
    <Provider store={Storage}>
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/profile" exact>
              <Profile/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
