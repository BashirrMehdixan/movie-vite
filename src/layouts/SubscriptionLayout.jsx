import {Link} from "react-router-dom";

const SubscriptionLayout = () => {
    return (
        <>
            <section className="h-[250px] my-14">
                <div className="h-full container">
                    <div className="h-full bg-[url(/public/images/banner/subscription.png)] bg-no-repeat bg-cover border-2 border-[#262626]">
                        <div className="h-full flex items-center justify-around">
                            <div className="text-white">
                                <h1 className="text-white text-3xl font-bold py-4">
                                    Start your free trial today!
                                </h1>
                                <p className="opacity-45">
                                    This is a clear and concise call to action that encourages users to sign up for a
                                    free trial of StreamVibe.
                                </p>
                            </div>
                            <Link to={"subscription"} className="bg-[#E50000] text-white px-6 py-5 rounded-lg">
                                Start a Free Trial
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SubscriptionLayout;