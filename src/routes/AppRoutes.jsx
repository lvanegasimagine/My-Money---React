import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const AppRoutes = () => {
  return (
    <div className="app">
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRoutes;
