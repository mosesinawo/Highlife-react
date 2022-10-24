import HeaderNavbar from './Navbar/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from './components/categories/Categories';
import Store from './components/store/Store';
import Highlife from './components/highlife/Highlife';
import Niara from './components/Niara/Niara';
import Product from './components/product/Product';


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
        <Route path='/niara'>
      <Niara/>
        </Route>
        <Route path='/product'>
      <Product/>
        </Route>

      </Switch>
    </div>

    </Router>
  );
}

export default App;
