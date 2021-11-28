import Homepage from "./components/pages/Homepage";
import Navbar from "./components/layout/Navbar";
import Admin from "./components/pages/Admin";
import NotFound from "./components/pages/NotFound";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
