import Home from "./Home";
import Login from "./Login";
import { Link, Routes, Route } from "react-router-dom";
import './Styles/results.css'

function App() {
  return (
    <>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
