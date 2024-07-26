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

    const searchKey = (e) => {
        if (e.key === "Enter") {
            searchAction();
        }
    }
    useEffect(() => {
        if(activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                closeAction();
            }
        })
    })
    return (
        <>
            <div
                className={`fixed w-full h-full flex justify-center items-center bg-[#1A1A1A] origin-top transition-all duration-300 top-0 left-0 z-50 ${activeModal ? "scale-y-100" : "scale-y-0"}`}
            >
                <div className="w-full h-full overflow-y-auto py-7 rounded-lg">
                    <div className="container">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyUp={(e) => searchKey(e)}
                                placeholder="Search movies..."
                                className="border-2 border-[#262626] outline-none text-white bg-transparent p-3 w-full search-input"
                            />
                            <button onClick={searchAction} className="py-3 px-8 bg-[#E50000] text-white rounded">
                                Search
                            </button>
                        </div>
                        <div className={"w-full flex flex-wrap items-center"}>
                            {searchMovies.map((searchMovie, index) => (
                                <div className={"w-full md:w-[calc(25%-1rem)] m-2"} key={index}>
                                    <MovieComponent {...searchMovie} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchModal;