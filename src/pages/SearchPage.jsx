import SearchAnime from "../anime_components/SearchAnime"
import NavigationBar from "../components/NavigationBar"

const SearchPage = () => {
    return(
        <div className="searchPage">
            <NavigationBar/>
            <br/>
            <br/>
            <br/>
            <SearchAnime/>
        </div>
    )   
}

export default SearchPage