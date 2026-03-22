import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "./components/ui/provider";

function App() {
  return (
    <Provider>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
