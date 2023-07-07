import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Navbar />
                <Home />
              </>
            )}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
