import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/StylingPage.css"
import "./style/StylingComponents.css"

import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import SeasonPage from "./pages/SeasonPage";
import RandomPage from "./pages/RandomPage";
import NoPage from "./pages/NoPage";
import UpComingPage from "./pages/UpComingPage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/anime" element={<AnimePage/>}/>
        <Route path="/anime/upcoming" element={<UpComingPage/>}/>
        <Route path="/anime/season" element={<SeasonPage/>}/>
        <Route path="/random" element={<RandomPage/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
