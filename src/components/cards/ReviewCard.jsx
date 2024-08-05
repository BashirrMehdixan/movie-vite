import StarRating from "/src/components/StarRating";

const ReviewCard = ({author, content, author_details}) => {
    return (
        <>
            <div className="bg-[#0F0F0F] py-5 px-4 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="text-lg text-white">
                        <p>
                            {author}
                        </p>
                        <p className={"text-sm opacity-45"}>From England</p>
                    </div>
                    {author_details.rating ? <StarRating rating={author_details.rating}/> : <StarRating rating={7.5}/>}
                </div>
                <div className="h-[280px] overflow-y-auto opacity-45 py-3">
                    <div dangerouslySetInnerHTML={{__html: content}}/>
                </div>
            </div>
        </>
    )
}

export default ReviewCard;