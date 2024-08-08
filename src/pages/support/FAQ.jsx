import {Link} from "react-router-dom";
import SectionTitle from "/src/components/SectionTitle";
import AccordionItem from "/src/components/AccordionItem";

const FAQ = () => {
    return (
        <>
            <section className={"my-10"}>
                <div className="container">
                    <div className="flex flex-wrap items-center justify-between">
                        <SectionTitle
                            heading={'Frequently Asked Questions'}
                            inner={'Got questions? We\'ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.'}
                        />
                        <Link to={"/support"}
                              className={"bg-[#E50000] text-white font-medium p-4 rounded-lg transition duration-500 hover:bg-[#B10000]"}>
                            Ask a Question
                        </Link>
                    </div>
                    <div className={"md:max-h-[900px] flex flex-wrap gap-y-2 gap-x-9 pt-10"}>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'What is StreamVibe?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={1}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'How much does StreamVibe cost?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={2}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'How can I watch StreamVibe?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={3}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'How can I watch StreamVibe?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={4}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'How do I sign up for StreamVibe?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={5}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'What is the StreamVibe free trial?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={6}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'How do I contact StreamVibe customer support?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={7}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-2.25rem)]">
                            <AccordionItem
                                title={'What are the StreamVibe payment methods?'}
                                content={'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'}
                                count={8}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FAQ;