import React from "react";
import Header from "./Components/Header";
import Reduxcrud from "./Pages/Crud/Crud";
import Editreduxcrud from "./Pages/Crud/Editcrud";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/crud-app" component={Reduxcrud} />
        <Route exact path="/editcrud/:id" component={Editreduxcrud} />
      </Switch>
    </Router>
  );
}

export default App;
