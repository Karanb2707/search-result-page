import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}
