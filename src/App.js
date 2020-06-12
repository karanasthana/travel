import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import FullImage from './Views/FullImage';
// import India from './Views/India';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import StatesPage from './pages/StatesPage';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/states">Users</Link>
            </li>
          </ul>
        </nav>
        <div>
        </div> */}
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path={"/states/:id"} name="State" component={StatesPage} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
