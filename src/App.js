import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound/NotFound";
import { createContext } from 'react';
import { useState } from 'react';
import Admin from './pages/Admin';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import Dashboard from './components/Dashboard/Dashboard';


export const UserContext = createContext();

function App() {

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState("");
  const [detailsCar, setDetailsCar] = useState({});
  return (
    <UserContext.Provider
      value={{
        cars,
        setCars,
        search,
        setSearch,
        searchBtn,
        setSearchBtn,
        detailsCar, 
        setDetailsCar
      }}
      >
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
      
          
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/user/add-item">
            <AddItem />
          </Route>
          <Route path="/dashboard/user/details-car">
            <ItemDetails />
          </Route>
          <Route path="/dashboard/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
           </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
