const CastCards = ({profile_path, original_name}) => {
    const imgSize = 'original'
    return (
        <>
            <div className="w-[102px] h-[110px] rounded-lg cursor-pointer">
                <img
                    src={`https://image.tmdb.org/t/p/${imgSize}${profile_path}`}
                    className={"w-full h-full object-fill rounded-lg"}
                    alt={original_name} title={original_name}/>
            </div>
        </>
    )
}

export default CastCards;