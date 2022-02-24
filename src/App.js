import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import Product from "./Components/Products/Products";
import Cart from "./Components/Cart/CartItem";
import NavBar from "./Components/Navbar/NavBar"
import DrawerComponent from "./Components/Navbar/DrawerComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from "./Components/Layout";
import ProductDetail from './Components/Products/Product/ProductDetail'


const theme = createTheme({
  palette: {
    primary: {
      main: '#bd3e5e'
    },
    secondary: {
      main: '#6628ae'
    },
    spacing: 2,
  }
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <DrawerComponent />
            <NavBar />
            {/* <Header /> */}
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Abouts" element={<AboutUs />} />
              <Route path="/Products" element={<Products />}/>
              <Route path="/Products/:id" element={<ProductDetail />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>

            <div className="App">
            </div>
          </Layout>

        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
