import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Popular from "../anime_components/Popular"

const PopularPage = () => {
    return(
        <div className="popularPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Popular/>
        </div>
    )   
}

export default PopularPage