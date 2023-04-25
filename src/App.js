import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/StylingPage.css"
import "./style/StylingComponents.css"

import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import SeasonPage from "./pages/SeasonPage";
import RandomPage from "./pages/RandomPage";
import NoPage from "./pages/NoPage";
import UpComingPage from "./pages/UpComingPage";
import AiringPage from "./pages/AiringPage";
import TvPage from "./pages/TvPage";
import MoviePage from "./pages/MoviePage";
import OvaPage from "./pages/OvaPage";
import OnaPage from "./pages/OnaPage";
import SpecialPage from "./pages/SpecialPage";
import PopularPage from "./pages/PopularPage";
import FavoritePage from "./pages/FavoritePage";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/anime" element={<AnimePage/>}/>
        <Route path="/anime/airing" element={<AiringPage/>}/>
        <Route path="/anime/upcoming" element={<UpComingPage/>}/>
        <Route path="/anime/tv" element={<TvPage/>}/>
        <Route path="/anime/movie" element={<MoviePage/>}/>
        <Route path="/anime/ova" element={<OvaPage/>}/>
        <Route path="/anime/ona" element={<OnaPage/>}/>
        <Route path="/anime/special" element={<SpecialPage/>}/>
        <Route path="/anime/popular" element={<PopularPage/>}/>
        <Route path="/anime/favorite" element={<FavoritePage/>}/>
        <Route path="/anime/season" element={<SeasonPage/>}/>
        <Route path="/random" element={<RandomPage/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
