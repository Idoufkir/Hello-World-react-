import './App.css';
import Navbar from "./components/Navbar/Nav.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import Counter from "./components/Hook.jsx"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/home" component={Counter} />
        <Route path="/idoufkir" component={Shop} />
        <Route path="/mouissi" component={Product} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
