import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderS from "./modules/route/Route";
import "./App.css";
<<<<<<< HEAD
=======
// import TestCom from "./component/TestComp";
import UserBoard from "./component/UserBoard";
>>>>>>> 901b4b2a6eca06d78c2efb31ec1db9ad89512771

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="*" element={<HeaderS />}/>
=======
          <Route path="/" element={<UserBoard />}></Route>
>>>>>>> 901b4b2a6eca06d78c2efb31ec1db9ad89512771
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
