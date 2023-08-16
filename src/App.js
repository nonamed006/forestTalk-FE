import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderS from "./modules/route/Route";
import "./App.css";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HeaderS />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
