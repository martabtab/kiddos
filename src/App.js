import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./sass/styles.scss";

import Home from "./components/home/Home";
import Kiddos from "./components/kiddos/Kiddos";
import MomDad from "./components/momdad/MomDad";
import Aziende from "./components/aziende/Aziende";
import Eventi from "./components/Eventi";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/kiddos" component={Kiddos} />
      <Route exact path="/momdad" component={MomDad} />
      <Route exact path="/aziende" component={Aziende} />
    </Switch>
    <Footer />
  </>
);
