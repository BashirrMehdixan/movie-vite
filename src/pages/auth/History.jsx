import {useContext} from "react";
import Head from "/src/components/Head";
import SectionTitle from "/src/components/SectionTitle";
import {HistoryCard} from "/src/components/cards/MovieCards"
import {ShowsContext} from "/src/context/shows/ShowsContext";

const History = () => {
    const {shows} = useContext(ShowsContext);
    return (
        <>
            <Head title={`History`}/>
            <section className={`mt-11`}>
                <div className={`container`}>
                    <SectionTitle heading={`My History`}/>
                    <div className={`flex flex-wrap items-center gap-3 my-5`}>
                        {shows.map((show, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-full md:w-[calc(33.3333%-.75rem)] lg:w-[calc(16.66666%-.75rem)]`}>
                                    <HistoryCard id={show.id} item={show} type={`shows`}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default History;