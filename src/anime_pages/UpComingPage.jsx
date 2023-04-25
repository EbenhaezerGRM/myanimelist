import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import UpComing from "../anime_components/UpComing"

const UpComingPage = () => {
    return(
        <div className="upComingPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <UpComing/>
        </div>
    )   
}

export default UpComingPage