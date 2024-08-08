import Head from "/src/components/Head";
import HomeBanner from "/src/pages/home/HomeBanner";
import HomeCategory from "/src/pages/home/HomeCategory";
import HomeDevices from "/src/pages/home/HomeDevices";
import HomeFAQ from "/src/pages/home/HomeFAQ";
import HomeSubscription from "/src/pages/home/HomeSubscription";

const HomeIndex = () => {
    return (
        <>
            <Head title={"Home"}/>
            <HomeBanner/>
            <HomeCategory/>
            <HomeDevices/>
            <HomeFAQ/>
            <HomeSubscription/>
        </>
    )
}

export default HomeIndex;