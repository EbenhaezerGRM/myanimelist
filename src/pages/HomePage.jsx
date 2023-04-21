import NavigationBar from "../components/NavigationBar"
import Intro from "../components/Intro"
import TopAnime from "../components/TopAnime"
import TopManga from "../components/TopManga"

const Home = () => {
    return(
        <>
        <div className="landingPage"> 
        <NavigationBar/>
        <Intro/>
        </div>

        <div className="topAnime">
        <TopAnime/>
        </div>

        <div className="topManga">
        <TopManga/>
        </div>

        </>





    )
}

export default Home