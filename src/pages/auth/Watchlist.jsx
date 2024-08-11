import Head from "/src/components/Head";
import SectionTitle from "/src/components/SectionTitle";

const Watchlist = () => {
    return (
        <>
            <Head title={`Watchlist`}/>
            <section
                className={`my-11`}>
                <div className={`container`}>
                    <SectionTitle heading={`My Watchlist`}/>
                    <div className={`flex flex-wrap`}>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Watchlist;