import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
// Context
import {ShowsContext} from "/src/context/shows/ShowsContext";
import {SeasonsContext} from "/src/context/shows/SeasonsContext";

// Components
import Head from "/src/components/Head";
import {BannerComponent} from "/src/components/cards/BannerComponent";
import EpisodeComponent from "/src/components/cards/EpisodeComponent";
import DetailComponent from "/src/components/DetailComponent";
import ReviewComponent from "/src/components/cards/ReviewComponent";
import CastComponent from "/src/components/cards/CastComponent";

const ShowsDetail = () => {
    const {id} = useParams();
    const {shows, showGenres} = useContext(ShowsContext);
    const {seasons, fetchSeasons} = useContext(SeasonsContext);
    const show = shows.find(item => item.id.toString() === id.toString());

    useEffect(() => {
        if (show) {
            fetchSeasons(show.id);
        }
    }, [show]);

    if (!show) {
        return <div>Loading...</div>;
    }
    return (
        show &&
        <>
            <Head title={show.name}/>
            <section className="h-screen">
                <BannerComponent id={show.id} item={show} type={"shows"}/>
            </section>
            <section className="py-3">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        <div className={"w-full lg:w-[70%]"}>
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
                                    <CastComponent id={show.id} type={"shows"}/>
                                </div>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <h4 className="text-3xl font-medium py-6">Seasons and Episodes</h4>
                                <EpisodeComponent id={show.id} seasons={seasons}/>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <h4 className="text-3xl font-medium py-6">Reviews</h4>
                                <ReviewComponent id={show.id} type={"shows"}/>
                            </div>
                        </div>
                        <div className={"w-full lg:w-[calc(30%-.5rem)]"}>
                            <DetailComponent id={show.id} item={show} itemGenres={showGenres}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShowsDetail;