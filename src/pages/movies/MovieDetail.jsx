import {useContext} from "react";
import {useParams} from "react-router-dom";
import {MovieContext} from "/src/context/movies/MovieContext";
import {BannerComponent} from "/src/components/BannerComponent";

const MovieDetail = () => {
    const {id} = useParams();
    const {movies} = useContext(MovieContext);
    const movie = movies.find(movieItem => movieItem.id.toString() === id.toString());
    console.log(movie)
    return (
        movie &&
        <>
            <div className="h-screen">
                <BannerComponent {...movie}/>
            </div>
        </>
    )
}

export default MovieDetail;