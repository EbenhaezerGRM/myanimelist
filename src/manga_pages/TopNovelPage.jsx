import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import TopNovel from "../manga_components/TopNovel"

const TopNovelPage = () => {
    return(
        <div className="novelPage">
            <NavigationBar/>
            <MangaNavigationBar/>
            <TopNovel/>
        </div>
    )   
}

export default TopNovelPage