import {useEffect, useContext, useState} from "react";
import {MoviesContext} from "/src/context/movies/MoviesContext";
import {MovieComponent} from "/src/components/MovieCards";
import {SeriesContext} from "/src/context/series/SeriesContext";

const SearchModal = ({activeModal, closeAction}) => {
    const [search, setSearch] = useState("");
    const [searchMovies, setSearchMovies] = useState([]);
    const {movies} = useContext(MoviesContext);
    const {series} = useContext(SeriesContext);

    const all = series && movies && [
        ...series.map(serie => ({...serie, type: 'series'})),
        ...movies.map(movie => ({...movie, type: 'movies'})),
    ];
    const searchAction = () => {
        if (search) {
            const results = all.filter(item => {
                return (
                    (item.name ? item.name.toLowerCase() : item.title.toLowerCase()).includes(search.toLowerCase())
                );
            });
            setSearchMovies(results);
        } else {
            setSearchMovies([]);
        }
    };

    const searchKey = (e) => {
        if (e.key === "Enter") {
            searchAction();
        }
    };

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                closeAction();
            }
        });
    }, [activeModal]);

    return (
        <div
            className={`fixed w-full h-full bg-[#1A1A1A] origin-top transition-all duration-300 top-0 left-0 z-50 ${activeModal ? "scale-y-100" : "scale-y-0"}`}
        >
            <div className="flex items-center justify-end pt-5 pr-2">
                <button className="border border-white text-white rounded-full px-5 py-3" onClick={() => closeAction()}>
                    X
                </button>
            </div>
            <div className="w-full h-full overflow-y-auto py-7 rounded-lg">
                <div className="container">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyUp={searchKey}
                            placeholder="Search movies..."
                            className="border-2 border-[#262626] outline-none text-white bg-transparent p-3 w-full search-input"
                        />
                        <button onClick={searchAction} className="py-3 px-8 bg-[#E50000] text-white rounded">
                            Search
                        </button>
                    </div>
                    <div className="w-full flex flex-wrap items-center">
                        {
                            searchMovies.length > 0 ?
                                searchMovies.map((searchMovie, index) => (
                                    <div className="w-full md:w-[calc(25%-1rem)] m-2" key={index}>
                                        <MovieComponent id={searchMovie.id} item={searchMovie} src={searchMovie.type}/>
                                    </div>
                                )) : <div
                                    className="w-full h-[calc(100vh-130px)] flex items-center justify-center text-4xl text-white m-2">
                                    The movie or series you are looking for is not in our database
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default SearchModal;