import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Movie from "../components/Movie"

const UpComingPage = () => {
    return(
        <div className="moviePage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Movie/>
        </div>
    )   
}

export default UpComingPage