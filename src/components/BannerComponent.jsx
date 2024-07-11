import {Link} from "react-router-dom";
// Icons
import {FaPlay} from "react-icons/fa";

const BannerComponent = ({id, backdrop_path, original_title, overview, title}) => {
    const imgSize = 'original';
    return (
        <>
            <div className={`relative h-full w-full flex justify-center items-end`}>
                <div className="absolute w-full h-full bg-black bg-opacity-45 z-10"></div>
                <div className="absolute w-full h-full">
                    <img
                        src={`https://image.tmdb.org/t/p/${imgSize}${backdrop_path}`}
                        className={'w-full h-full object-fill'} alt={original_title}
                    />
                </div>
                <div
                    className="relative z-10  bg-gradient-to-t from-current to-transparent"
                >
                    <div
                        className={'w-3/4 text-white text-center py-4 mx-auto'}>
                        <h2
                            className="text-7xl font-medium tracking-[5px]"
                        >
                            {title}
                        </h2>
                        <p className="opacity-45 py-2">
                            {overview}
                        </p>
                        <Link
                            to={`movies-and-shows/${id.toString()}`}
                            className={'inline-flex items-center justify-center bg-[#FF0000] px-8 py-5 space-x-2 rounded-lg capitalize transition-all ease-linear hover:bg-[#E50000]'}
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