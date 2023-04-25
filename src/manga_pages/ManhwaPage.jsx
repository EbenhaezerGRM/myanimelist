import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import Manhwa from "../manga_components/Manhwa"

const ManhwaPage = () => {
    return(
        <div className="manhwaPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <Manhwa/>
        </div>
    )   
}

export default ManhwaPage