import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestaurantDetailPage, Home, UpdatePage } from "./routes";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route exact path="/restaurants/:id/update" element={<UpdatePage />} />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
