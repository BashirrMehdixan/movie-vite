const SectionTitle = ({heading, inner}) => {
    return (
        <>
            <div className="text-white">
                <h2 className={'text-xl md:text-2xl lg:text-4xl'}>
                    {heading}
                </h2>
                <p className={'text-sm md:text-base opacity-45 py-4'}>
                    {inner}
                </p>
            </div>
        </>
    )
}

export default SectionTitle;