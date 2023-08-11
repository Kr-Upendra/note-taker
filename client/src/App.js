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
import AccountLayout from "./components/AccountLayout";
import UpdateProfile from "./pages/account/UpdateProfile";
import MemberShip from "./pages/account/MemberShip";
import YourNotes from "./pages/account/YourNotes";
import AddNote from "./pages/account/AddNote";
import UpdateNote from "./pages/account/UpdateNote";
import GetStats from "./pages/account/GetStats";
import ViewNote from "./pages/account/ViewNote";
import NoteLayout from "./components/NoteLayout";

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
            <Route path="account" element={<AccountLayout />}>
              <Route index element={<Account />} />
              <Route path="update-profile" element={<UpdateProfile />} />
              <Route path="membership" element={<MemberShip />} />

              <Route path="notes" element={<NoteLayout />}>
                <Route index element={<YourNotes />} />
                <Route path="addnote" element={<AddNote />} />
                <Route path="update-note/:id" element={<UpdateNote />} />
                <Route path="view-note/:id" element={<ViewNote />} />
                <Route path="get-stats" element={<GetStats />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
