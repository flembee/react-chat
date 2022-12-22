import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import * as Redux from 'react-redux';

import { store } from './redux';

import App from "./App";

import { InitialStorage } from "./InitialStorage";

import { SecureRoutes } from './SecureRoutes';

import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Redux.Provider store={store}>
    <Router>
      <InitialStorage />
        <App />
        <SecureRoutes />
    </Router>
  </Redux.Provider>
);

reportWebVitals();
