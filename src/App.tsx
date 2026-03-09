import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
