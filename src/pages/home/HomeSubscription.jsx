import {useState} from "react";
import SectionTitle from "/src/components/SectionTitle";
import TabComponent from "/src/components/TabComponent";

const HomeSubscription = () => {
    const [plan, setPlan] = useState("monthly");
    console.log(plan)
    return (
        <>
            <section className={"pt-16"}>
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
                        <div className="flex items-center">
                            <div className="w-[calc(33%-1rem)]">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSubscription;