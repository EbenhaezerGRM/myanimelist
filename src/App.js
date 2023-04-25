import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/StylingAnimePage.css"
import "./style/StylingMangaPage.css"
import "./style/StylingComponents.css"

import HomePage from "./pages/HomePage";
import AnimePage from "./anime_pages/AnimePage";
import SeasonPage from "./anime_pages/SeasonPage";
import RandomPage from "./pages/RandomPage";
import NoPage from "./pages/NoPage";
import UpComingPage from "./anime_pages/UpComingPage";
import AiringPage from "./anime_pages/AiringPage";
import TvPage from "./anime_pages/TvPage";
import MoviePage from "./anime_pages/MoviePage";
import OvaPage from "./anime_pages/OvaPage";
import OnaPage from "./anime_pages/OnaPage";
import SpecialPage from "./anime_pages/SpecialPage";
import PopularPage from "./anime_pages/PopularPage";
import FavoritePage from "./anime_pages/FavoritePage";

import MangaPage from "./manga_pages/MangaPage";
import OneShotPage from "./manga_pages/OneShotPage";
import DoujinshiPage from "./manga_pages/DoujinshiPage";
import TopMangaPage from "./manga_pages/TopMangaPage";
import LightNovelPage from "./manga_pages/LightNovelPages";
import TopNovelPage from "./manga_pages/TopNovelPage";
import ManhwaPage from "./manga_pages/ManhwaPage";
import ManhuaPage from "./manga_pages/ManhuaPage";
import PopularMangaPage from "./manga_pages/PopularPage";
import FavoriteMangaPage from "./manga_pages/FavoritePage";

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

        <Route path="/manga" element={<MangaPage/>} />
        <Route path="/manga/top" element={<TopMangaPage/>} />
        <Route path="/manga/Oneshot" element={<OneShotPage/>} />
        <Route path="/manga/doujin" element={<DoujinshiPage/>} />
        <Route path="/manga/lightnovel" element={<LightNovelPage/>} />
        <Route path="/manga/novel" element={<TopNovelPage/>} />
        <Route path="/manga/manhwa" element={<ManhwaPage/>} />
        <Route path="/manga/manhua" element={<ManhuaPage/>} />
        <Route path="/manga/popular" element={<PopularMangaPage/>} />
        <Route path="/manga/favorite" element={<FavoriteMangaPage/>} />

        <Route path="/random" element={<RandomPage/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}

export default App
