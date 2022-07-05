import { Home } from "./pages/home/Home";
import React from 'react' 
import Profile from "./pages/profile/Profile";
import Login from "./components/Login/Login";
import { Register } from "./components/register/Register";
import { BrowserRouter as Router,Switch, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
   {/*<Home/>*/}
    {/* <Profile/>*/}
    {/*<Login/>*/}
     {/* <Register/>*/}
     <Router>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/register">
        <Register/>
        </Route>
        <Route path="/profile:username">
        <Profile/>
        </Route>
      </Switch>
     </Router>
 
    </div>
  );
}

export default App;
