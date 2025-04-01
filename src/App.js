import { Route, Routes } from "react-router-dom";
import "./App.css";
import OnBoarding from "./Pages/OnBoarding";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Login/Signin";
import Verify from "./Pages/Login/Verify";
import { UserData } from "./context/UserContext";
import Account from "./Pages/Account/Account";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/Home/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signin />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default App;
