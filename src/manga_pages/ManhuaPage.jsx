import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import Manhua from "../manga_components/Manhua"

const ManhuaPage = () => {
    return(
        <div className="manhuaPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <Manhua/>
        </div>
    )   
}

export default ManhuaPage