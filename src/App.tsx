import React, { useEffect } from "react";
import { JobApplicationList } from "./pages/JobApplicationList";
import { JobForm } from "./pages/JobForm";
import { Home } from "./pages/Home";
import { Job } from "./pages/Job";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { GlobalStyle } from "./globalStyles";
import logo from "./assets/logo.png";
import { Route, Switch } from "react-router-dom";
import { fetchJobs, fetchUser } from "./store/actions";
import { useDispatch } from "react-redux";
import { AccountConfirmation } from "./pages/AccountConfirmation";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <GlobalStyle />
      <img src={logo} alt="HiPro logo" />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/form">
          <JobForm />
        </Route>

        <Route path="/jobs">
          <JobApplicationList />
        </Route>

        <Route path="/confirmaccount/:username">
          <AccountConfirmation />
        </Route>

        <Route path="/job/:id">
          <Job />
        </Route>
      </Switch>
    </>
  );
};

export default App;
