import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "./components/ui/provider";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

function App() {

  const context = useContext(ThemeContext);
  console.log("context", context);
  
  return (
    <Provider>
        <div className={context?.theme}>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<h1>NOT FOUND</h1>} />
            </Routes>
          </div>
        </div>
    </Provider>
  );
}

export default App;
