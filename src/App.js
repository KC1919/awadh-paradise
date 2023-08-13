import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Slider from "./components/Slider";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Slider />
      <Service />
      <Gallery />
      <Testimonial />
      <Pricing />
      <ContactForm />
    </div>
  );
}

export default App;

//app.js
