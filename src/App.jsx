import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Admin from "./components/Admin"; // Login Page
import Feedback from "./components/Feedback";
import Requirements from "./components/Requirements";

function App() {
  return (
    <Router>
      <Navbar /> {/* Shows navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
