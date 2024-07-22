import MovieBanner from "/src/pages/movies/MovieBanner";
import MovieGenres from "/src/pages/movies/MovieGenres";
import PopularGenres from "/src/pages/movies/PopularGenres";
import TrendMovie from "/src/pages/movies/TrendMovie";
import NewReleases from "/src/pages/movies/NewReleases";

const MoviesIndex = () => {
    return (
        <>
            <MovieBanner/>
            <MovieGenres/>
            <PopularGenres/>
            <TrendMovie/>
            <NewReleases/>
        </>
    )
}
export default MoviesIndex;