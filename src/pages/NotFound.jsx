import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="h-screen">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-9xl font-bold text-[#E50000]">404</h1>
                    <p className="text-5xl font-bold text-[#E50000] py-5">Page Not Found</p>
                    <Link to={`/`} className={`text-white bg-[#E50000] px-8 py-4 transition-all duration-300 rounded-lg hover:opacity-50`}>Back to Home</Link>
                </div>
            </div>
        </>
    )
}
export default NotFound;