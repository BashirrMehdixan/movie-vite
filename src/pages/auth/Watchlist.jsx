import {useContext, useEffect} from "react";
import Head from "/src/components/head/Head";
import SectionTitle from "/src/components/head/SectionTitle";
import {HistoryCard} from "/src/components/cards/MovieCards";
import {WatchlistContext} from "/src/context/Context";
import {DataContext} from "/src/context/DataContext";

const Watchlist = () => {
    const {watchlist} = useContext(WatchlistContext);
    const {fetchData} = useContext(DataContext);

    return (
        <>
            <Head title={`Watchlist`}/>
            <section
                className={`my-11`}>
                <div className={`container`}>
                    <SectionTitle heading={`My Watchlist`}/>
                    <div className={`flex flex-wrap gap-3 mt-9`}>
                        {watchlist?.map((movie, index) => {
                            return (
                                <div className={`w-full md:w-[calc(33.333333%-.75rem)] lg:w-[calc(16.666666%-.75rem)]`} key={index}>
                                    <HistoryCard id={movie.id} item={movie} type={`movies`}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Watchlist;