import React from "react";
import { JobApplicationList } from "./pages/JobApplicationList";
import { JobForm } from "./pages/JobForm";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./globalStyles";
import logo from "./assets/logo.png";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <img src={logo} alt="HiPro logo" />

      <Switch>
        <Route path="/form">
          <JobForm />
        </Route>

        <Route path="/jobs">
          <JobApplicationList />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Provider>
  );
};

export default App;
