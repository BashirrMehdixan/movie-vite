import {useState} from "react";
import SectionTitle from "/src/components/SectionTitle";
import TabComponent from "/src/components/TabComponent";
import PriceComponents from "/src/components/PriceComponents.jsx";

const HomeSubscription = () => {
    const [plan, setPlan] = useState("monthly");

    return (
        <>
            <section className={"my-16"}>
                <div className={"container"}>
                    <div className="flex items-center justify-between">
                        <div className="w-full lg:w-[calc(80%-1rem)]">
                            <SectionTitle
                                heading={'Choose the plan that\'s right for you'}
                                inner={'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'}
                            />
                        </div>
                        <div className="w-full lg:w-[calc(20%-1rem)]">
                            <TabComponent plan={plan} setPlan={setPlan}/>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className={"flex flex-wrap items-center gap-4"}>
                            <div className={"w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)]"}>
                                <PriceComponents
                                    plan={plan}
                                    title={"Basic"}
                                    description={"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."}
                                    price={plan === "monthly" ? "9.99" : "99.99"}
                                />
                            </div>
                            <div className={"w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)]"}>
                                <PriceComponents
                                    plan={plan}
                                    title={"Standard"}
                                    description={"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."}
                                    price={plan === "monthly" ? "12.99" : "120.99"}
                                />
                            </div>
                            <div className={"w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)]"}>
                                <PriceComponents
                                    plan={plan}
                                    title={"Premium"}
                                    description={"Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."}
                                    price={plan === "monthly" ? "14.99" : "120.99"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSubscription;