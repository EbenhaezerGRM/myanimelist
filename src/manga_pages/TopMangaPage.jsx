import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import TopManga from "../manga_components/TopManga"

const TopMangaPage = () => {
    return(
        <div className="topMangaPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <TopManga/>
        </div>
    )   
}

export default TopMangaPage