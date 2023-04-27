import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import OneShot from "../manga_components/OneShot"

const OneShotPage = () => {
    return(
        <div className="oneShotPage">
            <NavigationBar/>
            <MangaNavigationBar/>
            <OneShot/>
        </div>
    )   
}

export default OneShotPage