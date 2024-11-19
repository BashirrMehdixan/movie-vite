import {useEffect, useContext, useState} from "react";
import {MovieComponent} from "/src/components/cards/MovieCards";
import {DataContext} from "/src/context/DataContext";

const SearchModal = ({activeModal, closeAction}) => {
    const [data, setData] = useState([]);
    const {fetchSearch} = useContext(DataContext);
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        if (search.trim() === "") {
            setData([]);
            return;
        }
        const results = await fetchSearch(search);
        setData(results);
    };

    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                closeAction();
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [activeModal, closeAction]);

    return (
        <div
            className={`fixed w-full h-full bg-[#1A1A1A] origin-bottom lg:origin-top transition-all duration-300 top-0 left-0 z-50 ${activeModal ? "scale-y-100" : "scale-y-0"}`}
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
                            placeholder="Search movies..."
                            className="border-2 border-[#262626] outline-none text-white bg-transparent p-3 w-full search-input"
                        />
                        <button className="search_btn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <div className="w-full flex flex-wrap items-center">
                        {data.length > 0 ? (
                            data.map((searchMovie) => (
                                <div className="w-full md:w-[calc(25%-1rem)] m-2" key={searchMovie.id}>
                                    <MovieComponent id={searchMovie.id} item={searchMovie} src={searchMovie.type}/>
                                </div>
                            ))
                        ) : (
                            <div className="w-full h-[calc(100vh-130px)] flex items-center justify-center text-4xl text-white m-2">
                                The movie or series you are looking for is not in our database
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;