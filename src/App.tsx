import React, { useEffect } from "react";
import { JobApplicationList } from "./pages/JobApplicationList";
import { JobForm } from "./pages/JobForm";
import { Home } from "./pages/Home";
import { Job } from "./pages/Job";
import { GlobalStyle } from "./globalStyles";
import logo from "./assets/logo.png";
import { Route, Switch } from "react-router-dom";
import { fetchJobs } from "./store/actions";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

        <Route path="/form">
          <JobForm />
        </Route>

        <Route path="/jobs">
          <JobApplicationList />
        </Route>

        <Route path="/job/:id">
          <Job />
        </Route>
      </Switch>
    </>
  );
};

export default App;
