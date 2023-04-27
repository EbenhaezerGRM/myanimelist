import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import Popular from "../manga_components/Popular"

const PopularPage = () => {
    return(
        <div className="popularPage">
            <NavigationBar/>
            <MangaNavigationBar/>
            <Popular/>
        </div>
    )   
}

export default PopularPage