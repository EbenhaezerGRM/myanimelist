import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import UpComing from "../components/UpComing"

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