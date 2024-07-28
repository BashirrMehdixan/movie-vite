import {useContext, useEffect, useState} from "react";
import {SeasonsContext} from "../context/series/SeasonsContext.jsx";
import SingleEpisode from "./SingleEpisode.jsx";
import {ArrowUp} from "react-huge-icons/solid";

const SeriesAccordion = ({serieId, season_number, name, episode_count}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {seasons, episodes, fetchEpisodes} = useContext(SeasonsContext);
    useEffect(() => {
        if (seasons.length > 0) {
            fetchEpisodes(serieId, seasons.length);
        }
    }, [seasons]);

    const filteredEpisodes = episodes.filter(episode => episode.season_number === season_number);
    console.log(filteredEpisodes)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative py-3 rounded-lg mb-2 text-white accordion-item">
                <div
                    className="flex items-center justify-between text-left w-full text-base lg:text-[20px] font-normal bg-transparent border-0 border-transparent focus:outline-none py-5 lg:p-5"
                    onClick={toggleAccordion}
                >
                    <div className="flex items-center">
                        <span className={"text-2xl text-white font-medium"}>{name}</span>
                        <span className={"text-lg opacity-45 ml-3"}>{episode_count} Episodes</span>
                    </div>
                    <button
                        className={`p-2 rounded-full bg-[#262626] transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-180"} text-3xl`}>
                        <ArrowUp/>
                    </button>
                </div>
                <div className={`p-5 bg-transparent transition duration-500 origin-top ${!isOpen ? "scale-y-0" : "scale-y-100"}`}>
                    {filteredEpisodes.map((episode, index) => {
                        episode.number <= episode_count
                        return (
                            <SingleEpisode key={index} {...episode} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SeriesAccordion;