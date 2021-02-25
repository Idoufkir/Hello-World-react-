import './App.css';
import Navbar from "./components/Navbar/Nav";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/product" component={Product} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
