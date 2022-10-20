import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ChecklistIndex from "./pages/index";
import Navigation from "./components/navBar";
import ChecklistDetails from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="checklist/:id" element={<ChecklistDetails />} />
        <Route path="/" element={<ChecklistIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
