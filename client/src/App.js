import './App.css';
import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom"
import UserSignUp from "./view/UserSignUp";
import UserSignIn from "./view/UserSignIn";
import Welcome from "./view/Welcome";
import UserGetter from "./model/UserGetter";

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
        <div>
              <nav>
                <button>
                  <Link to="/signup">Sign Up</Link>
                </button>
                <button>
                  <Link to="/signin">Sign In</Link>
                </button>
                <button onClick={this.logOut}>
                  Logout
                </button>
              </nav>
            <Routes>
              <Route
                  path="/"
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
            </Routes>
        </div>
    );
  }
}

export default App;
