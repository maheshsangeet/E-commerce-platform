import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomeScreen from './component/HomeScreen';
import "./bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";
import Product from './component/Product';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products/:id" component={Product} />
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
