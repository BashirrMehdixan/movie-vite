import SectionTitle from "/src/components/SectionTitle";
import SubscriptionPlan from "/src/components/cards/SubscriptionPlan";
import SubscriptionTab from "/src/components/SubscriptionTab";


const SubscriptionDetail = () => {
    return (
        <>
            <section className={`mb-11`}>
                <div className={`container`}>
                    <SectionTitle
                        heading={`Compare our plans and find the right one for you`}
                        inner={'StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that\'s right for you.'}
                    />
                    <SubscriptionPlan/>
                    <SubscriptionTab/>
                </div>
            </section>
        </>
    )
}

export default SubscriptionDetail;