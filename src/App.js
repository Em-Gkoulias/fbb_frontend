import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Main from './components/Main';
// import Header from "./components/Header";
// import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
