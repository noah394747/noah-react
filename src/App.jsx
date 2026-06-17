import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clube from "./pages/Clube";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/noah-react/" element={<Home />} />
        <Route path="/noah-react/:clubeNome" element={<Clube />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;