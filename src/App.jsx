import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clube from "./pages/Clube";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/noah-react/" element={<Home />} />
        <Route path="/noah-react/:clubeNome" element={<Clube />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;