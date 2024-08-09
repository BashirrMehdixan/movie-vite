import Head from "/src/components/Head";
import HomeBanner from "/src/pages/home/HomeBanner";
import HomeCategory from "/src/pages/home/HomeCategory";
import HomeDevices from "/src/pages/home/HomeDevices";
import PlanTable from "/src/pages/subscriptions/PlanTable";
import FAQ from "/src/pages/support/FAQ";

const HomeIndex = () => {
    return (
        <>
            <Head title={`Home`} />
            <HomeBanner />
            <HomeCategory />
            <HomeDevices />
            <FAQ />
            <PlanTable />
        </>
    )
}

export default HomeIndex;