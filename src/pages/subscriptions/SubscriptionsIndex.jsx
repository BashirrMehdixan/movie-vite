import Head from "/src/components/head/Head";
import PlanTable from "/src/pages/subscriptions/PlanTable";
import SubscriptionDetail from "/src/pages/subscriptions/SubscriptionDetail";

const SubscriptionsIndex = () => {
    return (
        <>
            <Head title={`Subscription`}/>
            <PlanTable/>
            <SubscriptionDetail/>
        </>
    )
}

export default SubscriptionsIndex;