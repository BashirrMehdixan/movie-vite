import MovieBanner from "/src/pages/movies/MovieBanner";
import MovieGenres from "/src/pages/movies/MovieGenres";
import PopularGenres from "/src/pages/movies/PopularGenres";
import TrendMovie from "/src/pages/movies/TrendMovie";
import NewReleases from "/src/pages/movies/NewReleases";
import MustWatch from "/src/pages/movies/MustWatch";
import Head from "/src/components/Head";

const MoviesIndex = () => {
    return (
        <>
            <Head title={"Movies"}/>
            <MovieBanner/>
            <MovieGenres/>
            <PopularGenres/>
            <TrendMovie/>
            <NewReleases/>
            <MustWatch/>
        </>
    )
}
export default MoviesIndex;