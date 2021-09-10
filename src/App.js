import SignIn from "./Pages/SignIn";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/signIn" />;
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
