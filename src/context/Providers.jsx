import AuthProvider from "/src/context/auth/AuthContext";
import FavoriteProvider from "/src/context/favorite/FavoriteContext";
import WatchlistProvider from "/src/context/watchlist/WatchlistContext";

const Providers = ({children}) => {
    return (
        <AuthProvider>
                    <FavoriteProvider>
                        <WatchlistProvider>
                            {children}
                        </WatchlistProvider>
                    </FavoriteProvider>
        </AuthProvider>
    )
}

export default Providers;