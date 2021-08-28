import Footer from './component/Footer';
import Header from './component/Header';
import HomeScreen from './component/HomeScreen';
import "./bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Product from './component/Product';
import Cart from './component/Cart';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products/:id" component={Product} />
          <Route path="/cart" component={Cart} />
        </main>
        <br/>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
