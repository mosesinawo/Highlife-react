import HeaderNavbar from './Navbar/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from './components/categories/Categories';
import Store from './components/store/Store';
import Highlife from './components/highlife/Highlife';


function App() {
  return (
    <Router>
    <div>
      <HeaderNavbar/>
      <Switch>
        <Route exact path='/'>
      <Home/>
        </Route>
        <Route path='/categories'>
      <Categories/>
        </Route>
        <Route path='/store'>
      <Store/>
        </Route>
        <Route path='/highlifetv'>
      <Highlife/>
        </Route>

      </Switch>
     
    </div>

    </Router>
  );
}

export default App;
