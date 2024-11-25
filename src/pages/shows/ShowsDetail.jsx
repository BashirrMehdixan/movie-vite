import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// Context
import {DataContext} from "/src/context/DataContext";

// Components
import Head from "/src/components/Head";
import {BannerComponent} from "/src/components/cards/BannerComponent";
import EpisodeComponent from "/src/components/cards/EpisodeComponent";
import DetailComponent from "/src/components/DetailComponent";
import ReviewComponent from "/src/components/cards/ReviewComponent";
import CastComponent from "/src/components/cards/CastComponent";
import {PlusThin} from "react-huge-icons/outline";

const ShowsDetail = () => {
    const {id} = useParams();
    const {getDetail} = useContext(DataContext);
    const [show, setShow] = useState();
    useEffect(() => {
        getDetail('tv', id).then(data => setShow(data));

    },[])
    return (
        show &&
        <>
            <Head title={show.name}/>
            <section className="h-screen">
                <BannerComponent id={show.id} item={show} type={`shows`}/>
            </section>
            <section className="py-3">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        <div className={`w-full lg:w-[70%]`}>
                            <div
                                className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">Description</h4>
                                <p className="text-lg pt-3">{show.overview}</p>
                            </div>
                            <div
                                className="relative bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">
                                    Cast
                                </h4>
                                <div className="cat-swiper pt-8">
                                    <CastComponent id={show.id} type={`tv`}/>
                                </div>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <h4 className="text-3xl font-medium py-6">Seasons and Episodes</h4>
                                <EpisodeComponent id={show.id} show={show}/>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <div className={`flex flex-wrap items-center justify-between`}>
                                    <h4 className="text-3xl font-medium py-6 mb-2 lg:mb-0">Reviews</h4>
                                    <button
                                        className="flex items-center gap-1 bg-[#1A1A1A] text-sm capitalize px-2 py-4 border-2 border-[#262626] rounded-xl">
                                        <PlusThin className={`text-2xl`}/>
                                        <span>Add your review</span>
                                    </button>
                                </div>
                                <ReviewComponent id={show.id} type={`tv`}/>
                            </div>
                        </div>
                        <div className={`w-full lg:w-[calc(30%-.5rem)]`}>
                            <DetailComponent item={show} genres={show.genres}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShowsDetail;