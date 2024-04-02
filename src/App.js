import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Components/Header";
import Footer from "./Pages/Home/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Centres from "./Pages/Centres/Centres";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" index element={<AboutUs />} />
            <Route path="/centres" index element={<Centres />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
