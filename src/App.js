import './App.css';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

import Partner from './components/Home/Partner.jsx';
import Whoarewe from './components/Home/Whoarewe.jsx';
import Vision from './components/Home/Vision.jsx';
import Products from './components/Home/Products.jsx';

import HeroSection from './components/Homepage/HeroSection.jsx';
import TMT_Bars from './components/Our_Services/TMT_BARS/TMT_Bars.jsx';
import AboutUs from './components/About_us/About_us.jsx';
import ContactUs from './components/Contact_us/Contact_us.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

const StyledDiv = styled.div`font-family: 'Outfit', sans-serif; color: #333;`;

function App() {
  return (
    <Router>
      <StyledDiv>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/tmt-bars" element={<TMT_Bars />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer/>
      </StyledDiv>
    </Router>
  );
}

export default App;