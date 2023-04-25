import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Special from "../anime_components/Special"

const SpecialPage = () => {
    return(
        <div className="specialPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Special/>
        </div>
    )   
}

export default SpecialPage