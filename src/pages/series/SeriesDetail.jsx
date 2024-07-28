import {useContext} from "react";
import {useParams} from "react-router-dom";

import {SeriesContext} from "/src/context/series/SeriesContext";
import {BannerComponent} from "/src/components/BannerComponent.jsx";
import EpisodeComponent from "../../components/EpisodeComponent.jsx";

const SeriesDetail = () => {
    const {id} = useParams();
    const {series} = useContext(SeriesContext);
    const serie = series.find(item => item.id.toString() === id.toString());
    console.log(serie);
    return (
        serie &&
        <>
            <section className={"h-screen"}>
                <BannerComponent {...serie} />
            </section>
            <section className="py-3">
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
                                    {serie.overview}
                                </p>
                            </div>
                            <div className="bg-[#1A1A1A] border-2 border-[#262626] text-white rounded-lg mb-5 p-3">
                                <EpisodeComponent id={serie.id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeriesDetail;