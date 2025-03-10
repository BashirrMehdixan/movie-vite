import {useContext, useEffect, useRef, useState} from "react";
import {ArrowUp} from "react-huge-icons/solid";
import {DataContext} from "/src/context/DataContext";
import SingleEpisode from "/src/components/SingleEpisode";

const SeriesAccordion = ({showId, season}) => {
        const [episodes, setEpisodes] = useState([]);

        const {getEpisodes} = useContext(DataContext);
        const contentRef = useRef(null);

        useEffect(() => {
            getEpisodes(showId, season.season_number, season).then(data => setEpisodes(data));
        }, [showId, season.season_number, getEpisodes, season]);

        const [isOpen, setIsOpen] = useState(false);
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
                        <div className="flex flex-wrap items-center">
                            <span className="text-2xl w-full md:w-auto text-white font-medium">{season.name}</span>
                            <span className="text-lg w-full md:w-auto opacity-45 md:ml-3">{season.episode_count} Episodes</span>
                        </div>
                        <button
                            className={`p-2 rounded-full bg-[#262626] transition-all duration-300 ${isOpen ? `rotate-0` : `rotate-180`} text-3xl`}
                        >
                            <ArrowUp/>
                        </button>
                    </div>
                    <div
                        ref={contentRef}
                        className="md:px-5 bg-transparent transition-height duration-500 origin-top overflow-hidden"
                        style={{
                            height: isOpen ? `${contentRef.current.scrollHeight}px` : `0px`,
                        }}
                    >
                        {
                            episodes
                                .map((episode, index) => <SingleEpisode key={index} {...episode} />)
                        }
                    </div>
                </div>
            </>
        );
    }
;

export default SeriesAccordion;