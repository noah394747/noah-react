import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clube from "./pages/Clube";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/noah-react/" element={<Home />} />
          <Route path="/noah-react/:clubeNome" element={<Clube />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;