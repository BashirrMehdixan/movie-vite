import { useState } from 'react';
import { Minus, Plus } from "react-huge-icons/solid";

const AccordionItem = ({ count, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative py-3 rounded-lg text-white accordion-item">
            <button
                className="flex items-center justify-between text-left w-full text-base lg:text-[20px] font-normal bg-transparent border-0 border-transparent focus:outline-none py-5 lg:p-5"
                onClick={toggleAccordion}
            >
                <div className="flex items-center">
                    <div className="bg-[#1F1F1F] mr-3 lg:mr-10 py-3 px-5 lg:px-6 rounded-xl">
                        {count}
                    </div>
                    <span>{title}</span>
                </div>
                <span>
                    {isOpen ? <Minus className={`text-3xl`} /> : <Plus className={`text-3xl`} />}
                </span>
            </button>
            {/*{isOpen && (*/}
            <div className={`px-5 bg-transparent transition-all duration-500 origin-top ${!isOpen ? 'scale-y-0 h-0' : `h-[90px] overflow-hidden`}`}>
                <p className="opacity-45">{content}</p>
            </div>
            {/*)}*/}
        </div>
    );
};

export default AccordionItem;