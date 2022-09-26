import Homepage from "./pages/Homepage/Homepage";
import HelpPage from "./pages/HelpPage";
import RequestPage from "./pages/RequestPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="request" element={<RequestPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
