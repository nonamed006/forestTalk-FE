import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import TestCom from "./component/TestComp";
import UserBoard from "./component/UserBoard";

function App() {
  return (
    <div className="root">
      {/* <Router>
        <Routes>
            <Route path="/testPage" element={<TestCom />} />
            <Route path='/*' element={<h2><br/>잘못된 접근입니다.</h2>} />
        </Routes>
      </Router> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
