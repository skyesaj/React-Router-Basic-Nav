import React from "react";
import "./App.css";
// import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Navigation";
const App = () => (
  <div>
    <Navigation />
    <Route path="/" exact components={Home} />
    <Route path="/about/" exact components={About} />
    <Route path="/contact/" exact components={Contact} />
  </div>
);

export default App;
