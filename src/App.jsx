import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Result from "./components/Result";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Header />} />
        <Route path="/gamechart/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
