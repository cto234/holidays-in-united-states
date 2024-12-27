import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router basename="/holidays-in-united-states">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
    );
}

export default App;

//For future reference when deploying: You need to add "homepage": "https://your-username.github.io/repository-name" to package.json
