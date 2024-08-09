import { ClockCircle } from "react-huge-icons/outline";

const SingleEpisode = ({ season_number, episode_number, name, overview, runtime, still_path }) => {
    const imgSize = 'original'
    return (
        <>

            <div
                className={`flex items-center gap-5 px-3 py-4 border-b border-t border-[#262626]`}>
                <div className="w-1/6">
                    <div className="flex items-center gap-3">
                        <div className={`text-3xl text-white opacity-45`}>
                            {episode_number}
                        </div>
                        <div className="w-[120px] h-[120px] rounded-lg">
                            <img src={`https://image.tmdb.org/t/p/${imgSize}${still_path}`}
                                className={`w-full h-full object-cover rounded-lg`}
                                alt={name}
                                title={name} />
                        </div>
                    </div>
                </div>
                <div className="w-5/6">
                    <div className="mb-3">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg">{name}</h4>
                            <div className={`w-[88px] bg-[#141414] border-2 border-[#262626] rounded-xl px-2 py-2`}>
                                <div className="flex items-center justify-between">
                                    <ClockCircle className={`text-lg`} />
                                    <span className={`text-sm`}>{runtime} min</span>
                                </div>
                            </div>
                        </div>
                        <p className={`text-sm opacity-45 mt-3`}>
                            {overview}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleEpisode;