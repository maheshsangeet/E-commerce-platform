import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomeScreen from './component/HomeScreen';
import "./bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />

    </div>
  );
}

export default App;
