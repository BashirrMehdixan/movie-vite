import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";

// Icons
import {PlusThin} from "react-huge-icons/outline";

// Context
import {DataContext} from "/src/context/DataContext";
// Components
import Head from "/src/components/head/Head";
import {BannerComponent} from "/src/components/cards/BannerComponent";
import CastComponent from "/src/components/cards/CastComponent";
import ReviewComponent from "/src/components/cards/ReviewComponent";
import DetailComponent from "/src/components/DetailComponent";

const MovieDetail = () => {
    const {id} = useParams();
    const {getDetail} = useContext(DataContext);
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getDetail('movie', id).then(data => setMovie(data));
    }, []);
    return (
        Object.keys(movie).length &&
        <>
            <Head title={movie.title}/>
            <section>
                <div className="h-screen">
                    <BannerComponent id={movie.id} item={movie} type={`movies`}/>
                </div>
            </section>
            <div className="my-5">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        <div className="w-full lg:w-[70%]">
                            <div
                                className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4
                                    className="text-2xl font-medium opacity-45">
                                    Description
                                </h4>
                                <p
                                    className="text-lg pt-3">
                                    {movie.overview}
                                </p>
                            </div>
                            <div
                                className="relative bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">
                                    Cast
                                </h4>
                                <div className="cat-swiper pt-8">
                                    <CastComponent id={movie.id} type={`movie`}/>
                                </div>
                            </div>
                            <div
                                className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <div className="flex flex-wrap items-center justify-between">
                                    <h4 className="text-2xl font-medium opacity-45 mb-2 lg:mb-0">
                                        Reviews
                                    </h4>
                                    <button
                                        className="flex items-center gap-1 bg-[#1A1A1A] text-sm capitalize px-2 py-4 border-2 border-[#262626] rounded-xl">
                                        <PlusThin className={`text-2xl`}/>
                                        <span>Add your review</span>
                                    </button>
                                </div>
                                <ReviewComponent id={movie.id} type={`movie`}/>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(30%-8px)]">
                            <DetailComponent id={movie.id} item={movie} genres={movie.genres}/>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default MovieDetail;