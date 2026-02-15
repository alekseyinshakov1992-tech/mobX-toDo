import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import DonePage from "./pages/done/DonePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="done" element={<DonePage />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
