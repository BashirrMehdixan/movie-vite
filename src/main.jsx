import ReactDOM from 'react-dom/client'
import App from '/src/App';
import MovieProvider from "/src/context/movies/MovieContext";
import CastContextProvider from "/src/context/cast/CastContext";
import ReviewProvider from "/src/context/reviews/ReviewContext";
import FavouriteContextProvider from "/src/context/favourite/FavouriteContext.jsx";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <MovieProvider>
        <CastContextProvider>
            <ReviewProvider>
                <FavouriteContextProvider>
                    <App/>
                </FavouriteContextProvider>
            </ReviewProvider>
        </CastContextProvider>
    </MovieProvider>
)
