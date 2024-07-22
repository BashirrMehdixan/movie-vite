import ReactDOM from 'react-dom/client'
import App from '/src/App';
import MovieProvider from "/src/context/movies/MovieContext";
import "/src/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <MovieProvider>
        <App/>
    </MovieProvider>
)
