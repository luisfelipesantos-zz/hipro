import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import { configureAxios } from "./setup";

require("dotenv").config();

configureAxios();

Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP__AWSAMPLIFY_IDENTITYPOOLID,
    region: process.env.REACT_APP__AWSAMPLIFY_REGION,
    userPoolId: process.env.REACT_APP__AWSAMPLIFY_USERPOOLID,
    userPoolWebClientId: process.env.REACT_APP__AWSAMPLIFY_USERPOOLWEBCLIENTID,
    authenticationFlowType:
      process.env.REACT_APP__AWSAMPLIFY_AUTHENTICATIONFLOWTYPE,
    oauth: {
      domain: process.env.REACT_APP__AWSAMPLIFY_DOMAIN,
      scope: process.env.REACT_APP__AWSAMPLIFY_OAUTHSCOPES
        ? process.env.REACT_APP__AWSAMPLIFY_OAUTHSCOPES.split(",")
        : [],
      redirectSignIn: process.env.REACT_APP__AWSAMPLIFY_OAUTHREDIRECTSIGNIN,
      redirectSignOut: process.env.REACT_APP__AWSAMPLIFY_OAUTHREDIRECTSIGNOUT,
      responseType: process.env.REACT_APP__AWSAMPLIFY_OAUTHRESPONSETYPE,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
