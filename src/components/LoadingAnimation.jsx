const loadingAnimation = () => {
    return (
        <>
            <div className='absolute w-full flex space-x-2 justify-center items-center h-screen top-0 left-0 bg-black z-40'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-[#E50000] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-[#E50000] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-[#E50000] rounded-full animate-bounce'></div>
            </div>
        </>
    )
}
export default loadingAnimation;