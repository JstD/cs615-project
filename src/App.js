import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proposal from "./pages/proposal";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
