import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import DashBoard from "./Components/DashBoard";
import './App.css';
import Home from './Pages/Home'
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/Products/ProductList";
import ShoppingBag from "./Pages/ShoppingBag";
import NavBar from "./Components/Navbar/NavBar"
import DrawerComponent from "./Components/Navbar/DrawerComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Layout from "./Components/Layout";
import ProductDetail from './Components/Products/Product/ProductDetail'


const theme = createTheme({
  palette: {
    primary: {
      main: '#8c9eff',
      light: '#aeaeae',
      dark: '#aeaeae',
    },
    secondary: {
      main: '#757575',
      light: '#a4a4a4',
      dark: "#494949",
    },
    typography: {
      fontFamily: 'Cinzel',
      fontWeightRegular: '500',
    },
    spacing: 2,
    breakpoints: {
      values: {
        mobile: 0,
        bigMobile: 350,
        tablet: 650,
        desktop: 900
      }
    }  
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
              <Route path="/" element={<Home />} />
              <Route path="/Abouts" element={<AboutUs />} />
              <Route path="/Products" element={<ProductList />} />
              <Route path="/Products/:id" element={<ProductDetail />} />
              <Route path="/Cart" element={<ShoppingBag />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route exact path="/DashBoard" element={<DashBoard />} />
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
