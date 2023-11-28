import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/about/About";
import Contact from "./screens/Contact/Contact";
import Layout from "./components/Layout/Layout";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/About"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/Contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
