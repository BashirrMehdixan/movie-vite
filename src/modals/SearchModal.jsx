import {useEffect, useContext, useState} from "react";
import {MovieContext} from "/src/context/movies/MovieContext";
import {MovieComponent} from "/src/components/MovieCards";

const SearchModal = ({activeModal, closeAction}) => {
    const [search, setSearch] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const {movies} = useContext(MovieContext);

    const searchAction = () => {
        if (search) {
            const results = movies.filter(movie =>
                movie.original_title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchMovies(results);
        } else {
            setSearchMovies([]);
        }
    }

    return (
        activeModal &&
        <>
            <div
                className="fixed w-full h-full bg-black bg-opacity-70 top-0 left-0 z-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search movies..."
                        className="border p-2 mb-4 w-full"
                    />
                    <div className={"flex flex-wrap items-center"}>
                        {searchMovies.map((searchMovie, index) => (
                            <div className={"w-full md:w-[calc(25%-1rem)] m-2"} key={index}>
                                <MovieComponent {...searchMovie} />
                            </div>
                        ))}
                    </div>
                    <button onClick={searchAction} className="mt-4 p-2 bg-red-500 text-white rounded">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchModal;