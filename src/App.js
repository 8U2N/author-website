import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import Navbar from "./components/navbar";
import LandingPage from "./components/pages/landing-page";
import Home from "./components/pages/home";
import Novels from "./components/pages/novels";
import Comics from "./components/pages/comics";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import SignUp from "./components/pages/sign-up";
import Login from "./components/pages/login";
import PostDetail from "./components/pages/post-detail";
import ThankYou from "./components/pages/thank-you";
import NoMatch from "./components/pages/no-match";
import PostManager from "./components/pages/post-manager";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/novels" component={Novels} />
          <Route path="/comics" component={Comics} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          {token ? (
            <Route path="/post-manager" component={PostManager} />
          ) : (
            <Route path="/" component={LandingPage} />
          )}
          <Route exact path="/post/:slug" component={PostDetail} />
          <Route component={ThankYou} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <div className="app-footer-wrapper">
        <p>
          Coded by 8U2N with<em>_</em>
          <a href="http://127.0.0.1:3000/thank-you">friends</a>
        </p>
      </div>
    </div>
  );
}

export default App;
