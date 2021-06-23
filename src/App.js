import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import LandingPage from "pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/style.scss";
function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/properties/:id" component={DetailsPage}></Route>
      <Route path="/example" component={Example}></Route>
    </Router>
  );
}

export default App;
