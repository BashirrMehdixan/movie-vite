import SeriesBanner from "/src/pages/series/SeriesBanner";
import SeriesGenres from "/src/pages/series/SeriesGenres";
import PopularSeriesGenres from "/src/pages/series/PopularSeriesGenres";
import PopularSeries from "/src/pages/series/PopularSeries";

const SeriesIndex = () => {
    return (
        <>
            <SeriesBanner/>
            <SeriesGenres/>
            <PopularSeriesGenres/>
            <PopularSeries/>
        </>
    )
}
export default SeriesIndex;