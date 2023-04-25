import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import Doujinshi from "../manga_components/Doujinshi"

const DoujinshiPage = () => {
    return(
        <div className="doujinshiPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <Doujinshi/>
        </div>
    )   
}

export default DoujinshiPage