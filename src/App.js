import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import Errorpage from "./ErrorPage";
import SingleProduct from "./SingleProduct";
import{ GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#ff7e67",
      black: " #212529",
      helper: "#8aacff",

      bg: "#fff",
      footer_bg: "#0c005a",
      btn: "#240747",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "1025px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
   <Router>
    <GlobalStyle/>
    <Header/>
   <Routes>
    <Route path="/"element={<Home />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<Errorpage/>}/>
   </Routes>
   <Footer/>
   </Router>
   </ThemeProvider>
  );
};

export default App;
