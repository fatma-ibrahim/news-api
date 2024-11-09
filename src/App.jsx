import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Technology from "./components/pages/Technology";
import Science from "./components/pages/Science";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details"; 

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Technology />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/science" element={<Science />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
