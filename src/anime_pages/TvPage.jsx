import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Tv from "../anime_components/Tv"

const TvPage = () => {
    return(
        <div className="tvPage">
            <NavigationBar/>
            <AnimeNavigationBar/>
            <Tv/>
        </div>
    )   
}

export default TvPage