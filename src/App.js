import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AirconInstallation from "./pages/AirconInstallation";
import GasHeaterService from "./pages/GasHeaterService";
import AirconService from "./pages/AirconService";
import GovernmentRebate from "./pages/GovernmentRebate";
import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircon-installation" element={<AirconInstallation />} />
        <Route path="/aircon-service" element={<AirconService />} />
        <Route path="/government-rebate" element={<GovernmentRebate />} />
        <Route path="/gas-heater-service" element={<GasHeaterService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
