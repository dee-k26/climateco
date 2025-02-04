import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import AirconInstallation from "./pages/AirconInstallation";
// import AirconServiceRepair from "./pages/AirconServiceRepair";
// import GovernmentRebate from "./pages/GovernmentRebate";
// import GasHeaterInstallation from "./pages/GasHeaterInstallation";
// import GasHeaterServiceRepair from "./pages/GasHeaterServiceRepair";
// import WoodFireplaceInstallation from "./pages/WoodFireplaceInstallation";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aircon-installation" element={<AirconInstallation />} /> */}
        {/* <Route path="/aircon-service-repair" element={<AirconServiceRepair />} /> */}
        {/* <Route path="/government-rebate" element={<GovernmentRebate />} /> */}
        {/* <Route path="/gas-heater-installation" element={<GasHeaterInstallation />} /> */}
        {/* <Route path="/gas-heater-service-repair" element={<GasHeaterServiceRepair />} /> */}
        {/* <Route path="/wood-fireplace-installation" element={<WoodFireplaceInstallation />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    <Footer />
    </Router>
  );
}

export default App;
