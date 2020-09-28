import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { Header, Footer } from "components";
import PageLayout from "PageLayout";

import { App } from "pages/App";
import { About } from "pages/About";
import { Search } from "pages/Search";
import { Bookmarks } from "pages/Bookmarks";
import { Login } from "pages/Login";
import { RightsHolders } from "pages/RightsHolders";
import { Error404 } from "pages/Error404";

import "modern-css-reset";
import "./index.css";
import "./typography.css";

import "i18n";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="YOUR_DOMAIN"
      clientId="YOUR_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <Router>
        <PageLayout>
          <Header />
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/to-right-holders">
              <RightsHolders />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </PageLayout>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register(serviceWorker.SWConfig);
