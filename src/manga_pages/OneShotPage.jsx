import NavigationBar from "../components/NavigationBar"
import MangaNavigationBar from "../components/MangaNavigationBar"
import OneShot from "../manga_components/OneShot"

const OneShotPage = () => {
    return(
        <div className="oneShotPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <MangaNavigationBar/>
            <OneShot/>
        </div>
    )   
}

export default OneShotPage