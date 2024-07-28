import MoviesProvider from "/src/context/movies/MoviesContext";
import SeriesProvider from "/src/context/series/SeriesContext";
import CastsProvider from "/src/context/cast/CastContext";
import ReviewsProvider from "/src/context/reviews/ReviewContext";
import FavouritesProvider from "/src/context/favourite/FavouriteContext";
import SeasonsProvider from "/src/context/series/SeasonsContext";

const Providers = ({children}) => {
    return (
        <MoviesProvider>
            <SeriesProvider>
                <SeasonsProvider>
                    <CastsProvider>
                        <ReviewsProvider>
                            <FavouritesProvider>
                                {children}
                            </FavouritesProvider>
                        </ReviewsProvider>
                    </CastsProvider>
                </SeasonsProvider>
            </SeriesProvider>
        </MoviesProvider>
    )
}

export default Providers;