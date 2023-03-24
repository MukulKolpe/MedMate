import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Apply from "./pages/Apply/Apply";
import Forum from "./pages/Forum/Forum";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
