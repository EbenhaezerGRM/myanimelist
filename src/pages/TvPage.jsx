import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Tv from "../components/Tv"

const TvPage = () => {
    return(
        <div className="tvPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Tv/>
        </div>
    )   
}

export default TvPage