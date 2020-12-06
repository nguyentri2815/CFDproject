import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Demo from "./pages/demo";
import LoginUser from "./pages/loginuser";
import RegisterUser from "./pages/registeruser";
import FogetPass from "./pages/forgetpass";
import AuthProvider from "./hooks/useAuth";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/hoc-vien">
              <Profile />
            </Route>
            <Route path="/dang-ky">
              <Register />
            </Route>
            <Route path="/lien-he">
              <Contact />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/login">
              <LoginUser />
            </Route>
            <Route path="/register">
              <RegisterUser />
            </Route>
            <Route path="/fogetpass">
              <FogetPass />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
