import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Slider from "./components/Slider";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <CustomNavbar />
      {/* <Routes> */}
        {/* <Route exact path='/' element={<Slider />}></Route> */}
        {/* <Route exact path='/services' element={<Service />}></Route>
        <Route exact path='/gallery' element={<Gallery />}></Route>
        <Route exact path='/testimonial' element={<Testimonial />}></Route>
        <Route exact path='/pricing' element={<Pricing />}></Route>
        <Route exact path='/contact' element={<ContactForm />}></Route>
      </Routes> */}
      <Slider/>
      <Service/>
      <Gallery/>
      <Testimonial/>
      <Pricing/>
      <ContactForm/>
      <Location/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

//app.js
