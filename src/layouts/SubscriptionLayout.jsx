import {Link} from "react-router-dom";

const SubscriptionLayout = () => {
    return (
        <>
            <section className="h-[350px] my-14">
                <div className="h-full container">
                    <div
                        className="h-full bg-[url(/public/images/banner/subscription.png)] bg-no-repeat bg-cover bg-center border-2 border-[#262626] rounded-xl">
                        <div className="h-full flex flex-wrap items-center justify-center md:justify-around px-14">
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <div className="text-white">
                                    <h1 className="text-white text-2xl md:text-3xl font-bold py-3">
                                        Start your free trial today!
                                    </h1>
                                    <p className="text-sm md:text-base opacity-45">
                                        This is a clear and concise call to action that encourages users to sign up for
                                        a
                                        free trial of StreamVibe.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 py-5 text-center lg:text-right">
                                <Link to={"subscription"} className="bg-[#E50000] text-white px-6 py-5 rounded-lg">
                                    Start a Free Trial
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SubscriptionLayout;