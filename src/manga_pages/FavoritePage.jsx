import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import Favorite from "../manga_components/Favorite"

const FavoritePage = () => {
    return(
        <div className="favoritePage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <Favorite/>
        </div>
    )   
}

export default FavoritePage