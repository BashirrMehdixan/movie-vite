import {Link} from "react-router-dom";
// Icons
import {FaPlay} from "react-icons/fa";

const BannerComponent = ({id, backdrop_path, original_title, overview, title}) => {
    const imgSize = 'original';
    return (
        <>
            <div className={`relative h-full w-full flex justify-center items-end`}>
                <div className="absolute w-full h-full bg-black bg-opacity-45 z-10 top-0 left-0"></div>
                <div className="absolute w-full h-full">
                    <img
                        src={`https://image.tmdb.org/t/p/${imgSize}${backdrop_path}`}
                        className={'w-full h-full object-fill'} alt={original_title}
                    />
                </div>
                <div className="relative z-10 w-full bg-gradient-to-t from-current to-transparent">
                    <div
                        className={'w-3/4 text-white text-center py-6 mx-auto'}>
                        <h2 className="text-7xl font-medium tracking-[5px]">
                            {title}
                        </h2>
                        <p className="opacity-45 py-5">
                            {overview}
                        </p>
                        <Link to={`movies/${id.toString()}`}
                            className={'inline-flex items-center justify-center bg-[#E50000] px-8 py-5 space-x-2 rounded-lg capitalize transition-all duration-500 hover:bg-opacity-60'}
                        >
                            <span>
                                <FaPlay/>
                            </span>
                            <span>
                                Start watching now
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerComponent;