import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import StepOne from "./components/StepOne";
import End from "./components/End";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/end" element={<End />} />
          <Route path="/stepOne" element={<StepOne />} />
          {/* <Route path="stepTwo" element={<StepTwo />} /> */}
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
