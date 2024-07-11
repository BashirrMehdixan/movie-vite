const SectionTitle = ({heading, inner}) => {
    return (
        <>
            <div className="text-white">
                <h2 className={'text-4xl'}>
                    {heading}
                </h2>
                <p className={'opacity-45 py-4'}>
                    {inner}
                </p>
            </div>
        </>
    )
}

export default SectionTitle;