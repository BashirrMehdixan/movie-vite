import AuthProvider from "/src/context/auth/AuthContext";
import MoviesProvider from "/src/context/movies/MoviesContext";
import SeriesProvider from "/src/context/shows/ShowsContext";
import CastsProvider from "/src/context/cast/CastContext";
import ReviewsProvider from "/src/context/reviews/ReviewContext";
import FavoriteProvider from "/src/context/favorite/FavoriteContext";
import WatchlistProvider from "/src/context/watchlist/WatchlistContext";
import SeasonsProvider from "/src/context/shows/SeasonsContext";

const Providers = ({children}) => {
    return (
        <AuthProvider>
            <MoviesProvider>
                <SeriesProvider>
                    <SeasonsProvider>
                        <CastsProvider>
                            <ReviewsProvider>
                                <FavoriteProvider>
                                    <WatchlistProvider>
                                        {children}
                                    </WatchlistProvider>
                                </FavoriteProvider>
                            </ReviewsProvider>
                        </CastsProvider>
                    </SeasonsProvider>
                </SeriesProvider>
            </MoviesProvider>
        </AuthProvider>
    )
}

export default Providers;