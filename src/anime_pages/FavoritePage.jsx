import AnimeNavigationBar from "../components/AnimeNavigationBar"
import Favorite from "../anime_components/Favorite"
import NavigationBar from "../components/NavigationBar"

const FavoritePage = () => {
    return(
        <div className="favoritePage">
            <NavigationBar/>
            <AnimeNavigationBar/>
            <Favorite/>
        </div>
    )   
}

export default FavoritePage