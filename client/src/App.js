import './App.css';
import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom"
import UserSignUp from "./view/UserSignUp";
import UserSignIn from "./view/UserSignIn";
import Welcome from "./view/Welcome";
import UserGetter from "./model/UserGetter";
import AdminPage from './view/AdminPage';

class App extends Component{
  constructor(props) {
    super(props);
    this.state =
        {
          currentUser: undefined
        }
    ;
  }

  componentDidMount() {
    const user = UserGetter.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }
  logOut() {
    UserGetter.logout();

  }

  render () {
    const {currentUser} = this.state;
    return(
        <div className="container">
              <nav>
                <button>
                  <Link to="/signup">Sign Up</Link>
                </button>
                <button>
                  <Link to="/signin">Sign In</Link>
                </button>
                <button onClick={this.logOut}>
                 <Link to="/signin">Log Out</Link>
                </button>
              </nav>
            <Routes>
              <Route
                  path="/welcome"
                  element={<Welcome/>}
              />
              <Route
                  path="/signup"
                  element={<UserSignUp/>}
              />
              <Route
                  path="/signin"
                  element={<UserSignIn/>}
              />
              <Route
                  path="/admin"
                  element={<AdminPage userInfo={currentUser}/>}
              />
            </Routes>
        </div>
    );
  }
}

export default App;
