const PriceComponents = ({plan, title, description, price}) => {
    return (
        <>
            <div className={"bg-[#262626] text-white rounded-xl p-8 transition duration-300 ease-linear hover:bg-[#0F0F0F] cursor-pointer"}>
                <h3 className="text-2xl font-semibold capitalize">
                    {title} plan
                </h3>
                <p className="opacity-45 pt-3 pb-8">
                    {description}
                </p>
                <p className={"text-3xl font-semibold"}>
                    ${price}<span
                    className={"text-base opacity-45 font-normal"}>/{plan === "monthly" ? "month" : "year"}</span>
                </p>

                <div className="flex flex-wrap items-center justify-between pt-8">
                    <button
                        className={"w-full lg:w-auto bg-[#141414] capitalize py-5 px-9 rounded-xl border-2 border-[#262626] mb-2 lg:mb-0"}>
                        Start free trial
                    </button>
                    <button
                        className={"w-full lg:w-auto bg-[#E50000] capitalize py-5 px-9 rounded-xl border-2 border-[#262626]"}>
                        choose plan
                    </button>
                </div>
            </div>
        </>
    )
}

export default PriceComponents;