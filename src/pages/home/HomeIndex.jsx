import Head from "/src/components/Head";
import HomeBanner from "/src/pages/home/HomeBanner";
import HomeCategory from "/src/pages/home/HomeCategory";
import HomeDevices from "/src/pages/home/HomeDevices";
import HomeSubscription from "/src/pages/home/HomeSubscription";
import FAQ from "/src/pages/support/FAQ";

const HomeIndex = () => {
    return (
        <>
            <Head title={"Home"}/>
            <HomeBanner/>
            <HomeCategory/>
            <HomeDevices/>
            <FAQ/>
            <HomeSubscription/>
        </>
    )
}

export default HomeIndex;