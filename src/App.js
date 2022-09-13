import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/details" element={<Details />} />

          <Route
            path="/"
            element={
              <div>
                <Header />
                <Body />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
