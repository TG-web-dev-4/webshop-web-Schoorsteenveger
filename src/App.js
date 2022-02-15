import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Cart from "./Pages/Cart";
import NavBar from "./Components/Navbar/NavBar"
// import { createMuiTheme, ThemeProvider } from '@mui/system'
import DrawerComponent from "./Components/Navbar/DrawerComponent";


function App() {
  return (
    <>

      <Router>
        <DrawerComponent />
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

        <div className="App">
        </div>
      </Router>

    </>
  );
}

export default App;
