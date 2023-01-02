import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AddCandidate from "./pages/AddCandidate";
import CandidateList from "./pages/CandidateList";
import Home from "./pages/Home";

function App() {
  const navigateTo = useNavigate();
  return (
    <div className="App">
      <div className="titulo">
        <h1 className="h1" onClick={() => navigateTo("/")}>Prueba Técnica Ara-Tech</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addcandidate" element={<AddCandidate />} />
        <Route path="candidatelist" element={<CandidateList />} />
      </Routes>
    </div>
  );
}

export default App;
