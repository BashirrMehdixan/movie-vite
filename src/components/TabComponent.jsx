const TabComponent = ({ plan, setPlan }) => {
    return (
        <>
            <div
                className={`flex items-center justify-between bg-black rounded-2xl p-2 text-white`}>
                <button
                    className={`border border-transparent transition duration-500 hover:bg-[#1f1f1f] rounded-lg py-4 px-7 ${plan === 'monthly' ? 'bg-[#1f1f1f]' : ``}`}
                    onClick={() => setPlan('monthly')}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setPlan('yearly')}
                    className={`border border-transparent transition duration-500 hover:bg-[#1f1f1f] rounded-lg py-4 px-7 ${plan === 'yearly' ? 'bg-[#1f1f1f]' : ``}`}
                >
                    Yearly
                </button>
            </div>
        </>
    )
}
export default TabComponent;