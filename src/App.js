import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import WeatherPage from "./pages/weather-dashboard/WeatherPage";

function App() {
  return (
    <div>
      <MainPage />
      <Routes>
        <Route path="/weather" element={WeatherPage} />
      </Routes>
    </div>
  );
}

export default App;
