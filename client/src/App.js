import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route element={<AuthLayout />}>
              <Route path="auth/signup" element={<Signup />} />
              <Route path="auth/login" element={<Login />} />
            </Route>
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
