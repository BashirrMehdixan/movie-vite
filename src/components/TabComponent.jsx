import {useState} from "react";

const TabComponent = ({plan}) => {
    const [isActive, setIsActive] = useState(plan);
    return (
        <>
            <div
                className="flex items-center justify-between group bg-black rounded-2xl p-2 text-white">
                <button
                    className={`bg-transparent border border-transparent transition duration-500 has-[.active]:bg-[#1f1f1f] hover:bg-[#1f1f1f] rounded-lg py-4 px-7 ${isActive === 'monthly' ? 'bg-[#1f1f1f]' : ''}`}
                    onClick={() => setIsActive('monthly')}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setIsActive('yearly')}
                    className={`bg-transparent border border-transparent transition duration-500 has-[.active]:bg-[#1f1f1f] hover:bg-[#1f1f1f] rounded-lg py-4 px-7 ${isActive === 'yearly' ? 'bg-[#1f1f1f]' : ''}`}
                >
                    Yearly
                </button>
            </div>

        </>
    )
}
export default TabComponent;