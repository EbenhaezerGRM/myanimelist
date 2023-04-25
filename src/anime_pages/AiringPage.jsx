import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Airing from "../anime_components/Airing"

const AiringPage = () => {
    return(
        <div className="airingPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Airing/>
        </div>
    )   
}

export default AiringPage