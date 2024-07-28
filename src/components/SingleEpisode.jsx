const SingleEpisode = ({season_number, episode_number, name, overview, runtime, still_path}) => {
    const imgSize = 'original'
    return (
        <>

            <div
                className={"flex items-center gap-4 py-3"}>
                <div className={"text-2xl text-white opacity-45"}>
                    {episode_number}
                </div>
                <div className="">
                    <img src={`https://image.tmdb.org/t/p/${imgSize}${still_path}`}
                         className={"w-[120px] h-[120px]"}
                         alt={name}
                         title={name}/>
                </div>
                <div className="mb-3">
                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl">{name}</h4>
                        <span className={"px-4 py-2"}>{runtime}</span>
                    </div>
                    <p className={"mt-3"}>
                        {overview}
                    </p>
                </div>

            </div>
        </>
    )
}

export default SingleEpisode;