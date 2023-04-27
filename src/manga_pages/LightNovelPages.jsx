import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import LightNovel from "../manga_components/TopLightNovel"

const LightNovelPage = () => {
    return(
        <div className="lightNovelPage">
            <NavigationBar/>
            <MangaNavigationBar/>
            <LightNovel/>
        </div>
    )   
}

export default LightNovelPage