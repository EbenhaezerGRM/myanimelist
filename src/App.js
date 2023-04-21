import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/StylingPage.css"
import "./style/StylingComponents.css"

import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import RandomPage from "./pages/RandomPage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/random" element={<RandomPage/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
