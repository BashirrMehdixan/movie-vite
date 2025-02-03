import Head from "/src/components/head/Head";
import ShowsBanner from "/src/pages/shows/ShowsBanner";
import ShowsGenres from "/src/pages/shows/ShowsGenres";
import PopularShowsGenres from "/src/pages/shows/PopularShowsGenres";
import PopularShows from "/src/pages/shows/PopularShows";

const ShowsIndex = () => {
    return (
        <>
            <Head title={`Shows`} />
            <ShowsBanner />
            <ShowsGenres />
            <PopularShowsGenres />
            <PopularShows />
        </>
    )
}
export default ShowsIndex;