import NavigationBar from "../components/NavigationBar"
import AnimeNavigationBar from "../components/AnimeNavigationBar"
import TopAnime from "../components/TopAnime"

const AnimePage = () => {
    return(
        <div className="animePage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <TopAnime/>
        </div>
    )   
}

export default AnimePage