import ShowsBanner from "/src/pages/shows/ShowsBanner";
import ShowsGenres from "/src/pages/shows/ShowsGenres";
import PopularShowsGenres from "/src/pages/shows/PopularShowsGenres";
import PopularShows from "/src/pages/shows/PopularShows";

const ShowsIndex = () => {
    return (
        <>
            <ShowsBanner/>
            <ShowsGenres/>
            <PopularShowsGenres/>
            <PopularShows/>
        </>
    )
}
export default ShowsIndex;