import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Components/Header';
import Footer from './Pages/Home/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
