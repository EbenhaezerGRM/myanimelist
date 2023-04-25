import NavigationBar from "../components/NavigationBar"
import TopManga from "../manga_components/AllManga"
import MangaNavigationBar from "../components/MangaNavigationBar"

const MangaPage = () => {
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

export default MangaPage