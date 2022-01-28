import React from "react";
import {Switch, Route} from "react-router-dom";
import Main from "./Main";
import Form from "./Form";
import Contribute from "./Contribute";
import PrivacyTerms from "./PrivacyTerms";

const App = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/form" component={Form}></Route>
      <Route exact path="/contribute" component={Contribute}></Route>
      <Route exact path="/legal" component={PrivacyTerms}></Route>
    </Switch>
  );
};

export default App;
