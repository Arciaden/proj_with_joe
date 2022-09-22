import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ChecklistIndex from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChecklistIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
