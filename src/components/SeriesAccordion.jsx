import { useContext, useEffect, useRef, useState } from "react";
import { ArrowUp } from "react-huge-icons/solid";
import { SeasonsContext } from "/src/context/shows/SeasonsContext";
import SingleEpisode from "/src/components/SingleEpisode";

const SeriesAccordion = ({ serieId, season_number, name, episode_count }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { seasons, episodes, fetchEpisodes } = useContext(SeasonsContext);
    useEffect(() => {
        if (seasons.length > 0) {
            fetchEpisodes(serieId, seasons.length);
        }
    }, [seasons]);

    const filteredEpisodes = episodes.filter(episode => episode.season_number === season_number);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative py-3 rounded-lg mb-2 text-white accordion-item">
                <div
                    className="flex items-center justify-between text-left w-full text-base lg:text-[20px] cursor-pointer font-normal bg-transparent border-0 border-transparent focus:outline-none py-5 lg:p-5"
                    onClick={toggleAccordion}
                >
                    <div className="flex items-center">
                        <span className={`text-2xl text-white font-medium`}>{name}</span>
                        <span className={`text-lg opacity-45 ml-3`}>{episode_count} Episodes</span>
                    </div>
                    <button
                        className={`p-2 rounded-full bg-[#262626] transition-all duration-300 ${isOpen ? `rotate-0` : `rotate-180`} text-3xl`}>
                        < ArrowUp />
                    </button>
                </div>
                {/*{isOpen &&*/}
                <div
                    ref={contentRef}
                    className={`px-5 bg-transparent transition-height duration-500 origin-top overflow-hidden`}
                    style={{
                        height: isOpen ? `${contentRef.current.scrollHeight}px` : `0px`
                    }}
                >
                    {
                        filteredEpisodes.map((episode, index) => {
                            episode.number <= episode_count
                            return (
                                <SingleEpisode key={index} {...episode} />
                            )
                        })
                    }
                </div >
                {/*}*/}
            </div >
        </>
    )
}

export default SeriesAccordion;