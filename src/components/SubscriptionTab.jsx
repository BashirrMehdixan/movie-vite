import {useState} from "react";

const SubscriptionTab = () => {
    const [active, setActive] = useState("standard");
    return (
        <>
            <div className={`mt-11 lg:hidden`}>
                <div className={`flex items-center justify-center bg-[#0F0F0F] gap-3 border border-[#262626] p-3`}>
                    <button
                        onClick={(e) => setActive(e.target.innerText.toLowerCase())}
                        className={`text-white text-sm md:text-base transition ease-linear duration-300 rounded-md hover:bg-[#262626] py-3 px-4 md:px-8 ${active === "basic" ? "bg-[#262626]" : ""}`}>
                        Basic
                    </button>
                    <button
                        onClick={(e) => setActive(e.target.innerText.toLowerCase())}
                        className={`text-white text-sm md:text-base transition ease-linear duration-300 rounded-md hover:bg-[#262626] py-3 px-4 md:px-8 ${active === "standard" ? "bg-[#262626]" : ""}`}>
                        Standard
                    </button>
                    <button
                        onClick={(e) => setActive(e.target.innerText.toLowerCase())}
                        className={`text-white text-sm md:text-base transition ease-linear duration-300 rounded-md hover:bg-[#262626] py-3 px-4 md:px-8 ${active === "premium" ? "bg-[#262626]" : ""}`}>
                        Premium
                    </button>
                </div>
                <div className={`bg-[#0F0F0F] py-4 px-6 mt-5 border border-[#262626] rounded-md`}>
                    <div className={`flex flex-wrap`}>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Price</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "$9.99/Month" : active === "standard" ? "$12.99/Month" : "$14.99/Month"}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Free trial</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "7 days" : active === "standard" ? "7 days" : "7 days"}
                            </p>
                        </div>
                        <div className={`w-full md:w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Content</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? (
                                    "Access to a wide selection of movies and shows, including some new releases."
                                ) : active === "standard" ? (
                                    "Access to a wider selection of movies and shows, including most new releases and exclusive content"
                                ) : (
                                    "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
                                )}
                            </p>
                        </div>
                        <div className={`w-full md:w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Devices</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? (
                                    "Watch on one device simultaneously"
                                ) : active === "standard" ? (
                                    "Watch on two devices simultaneously"
                                ) : (
                                    "Watch on four device simultaneously"
                                )}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>cancel anytime</h5>
                            <p className={`text-white mt-1`}>
                                Yes
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>HDR</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "No" : "Yes"}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Dolby atmos</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "No" : "Yes"}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>Ad-Free</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "No" : "Yes"}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>offline viewing</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "No" : active === "standard" ? "Yes, for select titles." : "Yes, for all titles."}
                            </p>
                        </div>
                        <div className={`w-1/2 mb-5`}>
                            <h5 className={`text-[#999999] text-lg font-medium capitalize`}>family sharing</h5>
                            <p className={`text-white mt-1`}>
                                {active === "basic" ? "No" : active === "standard" ? "Yes, up to 5 family members." : "Yes, up to 6 family members."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionTab;