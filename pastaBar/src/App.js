import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Popular from "./pages/Popular";
import Menu from "./pages/Menu";
import VeganMenu from "./pages/VeganMenu";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Popular />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/menu" element={<><NavbarMenu /><Menu /></>} />
          <Route path="/vegan-menu" element={<><NavbarMenu /><VeganMenu /></>} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
