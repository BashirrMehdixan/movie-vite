const SectionTitle = ({heading, inner}) => {
    return (
        <>
            <div className="text-white">
                <h2
                    className={'text-xl md:text-2xl lg:text-4xl font-medium'}
                    data-aos={"fade-up"}
                    data-aos-duration={"3000"}
                >
                    {heading}
                </h2>
                <p
                    className={'text-sm md:text-base opacity-45 py-4'}
                    data-aos={"fade-up"}
                    data-aos-duration={"3000"}
                >
                    {inner}
                </p>
            </div>
        </>
    )
}

export default SectionTitle;