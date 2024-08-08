import Head from "/src/components/Head";
import SectionTitle from "/src/components/SectionTitle";
import FAQ from "/src/pages/support/FAQ";

const SupportIndex = () => {
    return (
        <>
            <Head title={"Support"}/>
            <section className={`pt-28 mb-20`}>
                <div className="container">
                    <div className={`flex flex-wrap justify-between`}>
                        <div className={`w-full lg:w-[30%]`}>
                            <SectionTitle
                                heading={`Welcome to our support page!`}
                                inner={`We're here to help you with any problems you may be having with our product.`}
                            />
                            <div className={`relative bg-[#0F0F0F] my-5 border-2 border-[#262626] rounded-md`}>
                                {/*<div className={`absolute w-full h-full bg-[#0F0F0F] rounded-2xl opacity-45`}></div>*/}
                                <img
                                    src={`/images/banner/Container.png`}
                                    className={`w-full h-full rounded-md`}
                                    alt={`Support`}/>
                            </div>
                        </div>
                        <div className={`w-full lg:w-[calc(70%-4rem)]`}>
                            <form>
                                <div
                                    className={`px-3 py-7 bg-[#0F0F0F] border border-[#262626] rounded-md text-white`}>
                                    <div className={`flex flex-wrap items-center`}>
                                        <div className={`w-full lg:w-1/2 `}>
                                            <div className={`lg:mr-2 my-5`}>
                                                <label
                                                    htmlFor={`firstname`}
                                                    className={`text-base`}>
                                                    Firstname
                                                </label>
                                                <input
                                                    type={`text`}
                                                    id={`firstname`}
                                                    placeholder={`Enter Firstname`}
                                                    className={`block w-full bg-transparent border border-[#262626] text-sm placeholder:text-sm placeholder:text-white placeholder:font-thin placeholder:opacity-45 focus:outline-none rounded-md py-3 pl-3 pr-4 my-2`}
                                                />
                                            </div>
                                        </div>
                                        <div className={`w-full lg:w-1/2 `}>
                                            <div className={`lg:mr-2 my-5`}>
                                                <label
                                                    htmlFor={`lastname`}
                                                    className={`text-base`}>
                                                    Lastname
                                                </label>
                                                <input
                                                    type={`text`}
                                                    id={`lastname`}
                                                    placeholder={`Enter lastname`}
                                                    className={`block w-full bg-transparent border border-[#262626] text-sm placeholder:text-sm placeholder:text-white placeholder:font-thin placeholder:opacity-45 focus:outline-none rounded-md py-3 pl-3 pr-4 my-2`}
                                                />
                                            </div>
                                        </div>
                                        <div className={`w-full lg:w-1/2 `}>
                                            <div className={`lg:mr-2 my-5`}>
                                                <label
                                                    htmlFor={`email`}
                                                    className={`text-base`}>
                                                    Email
                                                </label>
                                                <input
                                                    type={`text`}
                                                    id={`email`}
                                                    placeholder={`Enter email`}
                                                    className={`block w-full bg-transparent border border-[#262626] text-sm placeholder:text-sm placeholder:text-white placeholder:font-thin placeholder:opacity-45 focus:outline-none rounded-md py-3 pl-3 pr-4 my-2`}
                                                />
                                            </div>
                                        </div>
                                        <div className={`w-full lg:w-1/2 `}>
                                            <div className={`lg:my-5 lg:mr-2`}>
                                                <label
                                                    htmlFor={`number`}
                                                    className={`text-base`}>
                                                    Phone number
                                                </label>
                                                <input
                                                    type={`text`}
                                                    id={`number`}
                                                    placeholder={`Enter phone number`}
                                                    className={`block w-full bg-transparent border border-[#262626] text-sm placeholder:text-sm placeholder:text-white placeholder:font-thin placeholder:opacity-45 focus:outline-none rounded-md py-3 pl-3 pr-4 my-2`}
                                                />
                                            </div>
                                        </div>
                                        <div className={`w-full`}>
                                            <div className={`lg:my-5 lg:mr-2`}>
                                                <label
                                                    htmlFor={`message`}
                                                    className={`text-base`}>
                                                    Message
                                                </label>
                                                <textarea
                                                    id={`number`}
                                                    placeholder={`Enter your message`}
                                                    rows={5}
                                                    className={`block w-full resize-none bg-transparent border border-[#262626] text-sm placeholder:text-sm placeholder:text-white placeholder:font-thin placeholder:opacity-45 focus:outline-none rounded-md py-3 pl-3 pr-4 my-2`}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className={`w-full`}>
                                            <div className={`flex flex-wrap items-center justify-between`}>
                                                <div className={`flex items-center text-white opacity-65`}>
                                                    <input
                                                        type="checkbox"
                                                        id={`terms`}
                                                        className={`w-[15px] h-[15px] mr-2 checked:accent-[#E50000] rounded`}
                                                    />
                                                    <label
                                                        htmlFor={`terms`}
                                                        className={`font-thin`}>
                                                        I agree with Terms of Use and Privacy Policy
                                                    </label>
                                                </div>
                                                <button
                                                    className={`bg-[#E50000] px-3 py-4 rounded-lg text-white font-thin transition ease-linear duration-300 hover:bg-opacity-70`}>
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ/>
        </>
    )
}
export default SupportIndex;