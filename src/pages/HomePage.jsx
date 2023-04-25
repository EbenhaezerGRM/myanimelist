import NavigationBar from "../components/NavigationBar"
import Intro from "../components/Intro"
import TopAnime from "../anime_components/TopAnime"
import TopManga from "../manga_components/AllManga"

const Home = () => {
    return(
        <>
        <div className="landingPage"> 
        <NavigationBar/>
        <Intro/>
        </div>

        <div className="topAnimePage">
        <TopAnime/>
        </div>

        <div className="topMangaPage">
        <TopManga/>
        </div>
        </>
    )
}

export default Home