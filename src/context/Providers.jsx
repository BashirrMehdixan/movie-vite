import AuthProvider from "/src/context/auth/AuthContext";
import CastsProvider from "/src/context/cast/CastContext";
import ReviewsProvider from "/src/context/reviews/ReviewContext";
import FavoriteProvider from "/src/context/favorite/FavoriteContext";
import WatchlistProvider from "/src/context/watchlist/WatchlistContext";

const Providers = ({children}) => {
    return (
        <AuthProvider>
            <CastsProvider>
                <ReviewsProvider>
                    <FavoriteProvider>
                        <WatchlistProvider>
                            {children}
                        </WatchlistProvider>
                    </FavoriteProvider>
                </ReviewsProvider>
            </CastsProvider>
        </AuthProvider>
    )
}

export default Providers;