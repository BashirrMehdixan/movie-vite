import SeriesAccordion from "../SeriesAccordion.jsx";

const EpisodeComponent = ({id, seasons}) => {
    return (
        <>
            <div
                className="text-white bg-[#0F0F0F] border-2 border-[#262626] rounded-xl py-3 px-2 mb-3">
                {seasons.filter(season => season.name !== "Specials").map((season, index) => {
                    return (
                        <SeriesAccordion serieId={id} key={index} {...season} />
                    )
                })}
            </div>

        </>
    )
}
export default EpisodeComponent;