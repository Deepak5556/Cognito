import { Route, Routes } from "react-router-dom";
import "./App.css";
import OnBoarding from "./Pages/OnBoarding";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/Home/*" element={<Home />} /> {/* Add `/*` to allow nested routes */}
    </Routes>
  );
}

export default App;
