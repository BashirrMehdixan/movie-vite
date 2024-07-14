import HomeBanner from "/src/pages/home/HomeBanner";
import HomeCategory from "/src/pages/home/HomeCategory";
import HomeDevices from "/src/pages/home/HomeDevices";
import HomeFAQ from "/src/pages/home/HomeFAQ";

const HomeIndex = () => {
    return (
        <>
            <HomeBanner/>
            <HomeCategory/>
            <HomeDevices/>
            <HomeFAQ/>
        </>
    )
}

export default HomeIndex;