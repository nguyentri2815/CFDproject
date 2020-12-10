import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrivateRoute from "./core/components/PrivateRoute";
import AuthProvider from "./core/hooks/useAuth";
import Contact from "./pages/contact";
import Demo from "./pages/demo";
import FogetPass from "./pages/forgetpass";
import Home from "./pages/home";
import LoginUser from "./pages/loginuser";
import Profile from "./pages/profile";
import Register from "./pages/register";
import RegisterUser from "./pages/registeruser";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route path="/hoc-vien">
              <Profile />
            </Route> */}
            <PrivateRoute path="/hoc-vien" component={Profile}/>
            {/* <Route path="/dang-ky">
              <Register />
            </Route> */}
            <PrivateRoute path="/dang-ky" component={Register}/>
            <Route path="/lien-he">
              <Contact />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/loginUser">
              <LoginUser />
            </Route>
            <Route path="/register">
              <Register/>
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
