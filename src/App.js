import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import SearchAppBar from "./Components/SearchAppBar";





function App() {
  return (
    <>
      

      <Router>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

        <div className="App">
          <h2>Webshop</h2>

        </div>
      </Router>
    </>
  );
}

export default App;
