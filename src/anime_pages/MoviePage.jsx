import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Movie from "../anime_components/Movie"

const UpComingPage = () => {
    return(
        <div className="moviePage">
            <NavigationBar/>
            <AnimeNavigationBar/>
            <Movie/>
        </div>
    )   
}

export default UpComingPage