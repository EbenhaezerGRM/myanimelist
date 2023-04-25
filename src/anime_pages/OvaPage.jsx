import AnimeNavigationBar from "../components/AnimeNavigationBar"
import NavigationBar from "../components/NavigationBar"
import Ova from "../anime_components/Ova"

const OvaPage = () => {
    return(
        <div className="ovaPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <AnimeNavigationBar/>
            <Ova/>
        </div>
    )   
}

export default OvaPage