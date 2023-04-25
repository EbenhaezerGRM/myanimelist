import AnimeNavigationBar from "../components/AnimeNavigationBar"
import Favorite from "../components/Favorite"
import NavigationBar from "../components/NavigationBar"

const FavoritePage = () => {
    return(
        <div className="favoritePage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Favorite/>
        </div>
    )   
}

export default FavoritePage