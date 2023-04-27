import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Ona from "../anime_components/Ona"

const OnaPage = () => {
    return(
        <div className="onaPage">
            <NavigationBar/>
            <AnimeNavigationBar/>
            <Ona/>
        </div>
    )   
}

export default OnaPage