import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Reset from "./Components/Reset";
import DashBoard from "./Components/DashBoard";
import Home from './Pages/Home'
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Components/Products/ProductList";
import ShoppingBag from "./Pages/ShoppingBag";
import NavBar from "./Components/Navbar/NavBar"
import DrawerComponent from "./Components/Navbar/DrawerComponent";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ProductDetail from './Components/Products/Product/ProductDetail'


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff9c4',
      light: '#fffff7',
      dark: '#cbc693'
    },
    secondary: {
      main: '#37474f',
      light: '#62727b',
      dark: "#102027",
    },
    typography: {
      fontFamily: ['Cinzel', 'serif', 'Taviraj', 'serif'].join(','),
      fontWeightRegular: '500',
      fontSize: '18',
      color: '#ffab40'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides:
          `
          @font-face {
            font-family: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Cinzel'), 
          }
        `
      },
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
          <DrawerComponent />
          <NavBar />
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
          <Footer />
          <div className="App">
          </div>
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
