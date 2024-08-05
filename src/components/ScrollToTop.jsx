import {useState, useEffect} from "react";
import {ArrowUp} from "react-huge-icons/solid";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setShowScroll(true)
            } else {
                setShowScroll(false)
            }
        })
    })
    return (
        <>
            <a
                href={"#"}
                className={`fixed flex items-center justify-center w-[55px] h-[55px] bg-[#E50000] rounded-full bottom-[85px] lg:bottom-[20px] right-[10px] transition-all duration-500 z-20 ${!showScroll ? 'scale-0' : 'scale-100'}`}>
                <ArrowUp className={"text-white text-3xl"}/>
            </a>
        </>
    )
}

export default ScrollToTop;