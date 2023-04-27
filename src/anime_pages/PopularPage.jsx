import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Popular from "../anime_components/Popular"

const PopularPage = () => {
    return(
        <div className="popularPage">
            <NavigationBar/>
            <AnimeNavigationBar/>
            <Popular/>
        </div>
    )   
}

export default PopularPage