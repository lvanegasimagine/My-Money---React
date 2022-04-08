import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const AppRoutes = () => {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="app">
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              { !user && <Redirect to="/login" /> }
              { user && <Home />}
            </Route>
            <Route path="/login">
              { user && <Redirect to="/" /> }
              { !user && <Login />}
            </Route>
            <Route path="/signup">
              { user && <Redirect to="/" /> }
              { !user && <Signup />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default AppRoutes;
