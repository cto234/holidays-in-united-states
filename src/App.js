import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/holidays-in-united-states' element={<Home />} />
      </Routes>
    </Router>
    </>
    );
}

export default App;
