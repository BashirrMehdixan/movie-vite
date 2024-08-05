import {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import {SeriesContext} from "/src/context/series/SeriesContext";
import {SeasonsContext} from "/src/context/series/SeasonsContext";
import {BannerComponent} from "/src/components/cards/BannerComponent";
import EpisodeComponent from "/src/components/cards/EpisodeComponent";
import DetailComponent from "/src/components/DetailComponent";
import ReviewComponent from "../../components/cards/ReviewComponent.jsx";
import CastComponent from "../../components/cards/CastComponent.jsx";

const SeriesDetail = () => {
    const {id} = useParams();
    const {series, tvShows, seriesGenres} = useContext(SeriesContext);
    const {seasons, fetchSeasons} = useContext(SeasonsContext);
    const serie = series.find(item => item.id.toString() === id.toString());

    useEffect(() => {
        if (serie) {
            fetchSeasons(serie.id);
        }
    }, [serie]);

    if (!serie) {
        return <div>Loading...</div>;
    }
    return (
        serie &&
        <>
            <section className="h-screen">
                <BannerComponent id={serie.id} item={serie} type={"series"} />
            </section>
            <section className="py-3">
                <div className="container">
                    <div className="flex flex-wrap gap-2">
                        <div className={"w-full lg:w-[70%]"}>
                            <div
                                className="bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">Description</h4>
                                <p className="text-lg pt-3">{serie.overview}</p>
                            </div>
                            <div
                                className="relative bg-[#1A1A1A] border-2 border-[#262626] text-white px-5 py-10 rounded-lg mb-5">
                                <h4 className="text-2xl font-medium opacity-45">
                                    Cast
                                </h4>
                                <div className="cat-swiper pt-8">
                                    <CastComponent id={serie.id} type={"series"}/>
                                </div>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <h4 className="text-3xl font-medium py-6">Seasons and Episodes</h4>
                                <EpisodeComponent id={serie.id} seasons={seasons}/>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <h4 className="text-3xl font-medium py-6">Reviews</h4>
                                <ReviewComponent id={serie.id} type={"series"}/>
                            </div>
                        </div>
                        <div className={"w-full lg:w-[calc(30%-.5rem)]"}>
                            <DetailComponent id={serie.id} item={serie} itemGenres={seriesGenres}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SeriesDetail;