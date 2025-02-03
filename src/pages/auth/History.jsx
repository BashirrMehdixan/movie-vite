import {useContext, useEffect, useState} from "react";
import Head from "/src/components/head/Head";
import SectionTitle from "/src/components/head/SectionTitle";
import {HistoryCard} from "/src/components/cards/MovieCards"
import {DataContext} from "/src/context/DataContext";

const History = () => {
    const {fetchData} = useContext(DataContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData('trending', 'all', 'weekly').then(data => setData(data));
    }, []);
    return (
        <>
            <Head title={`History`}/>
            <section className={`mt-11`}>
                <div className={`container`}>
                    <SectionTitle heading={`My History`}/>
                    <div className={`flex flex-wrap items-center gap-3 my-5`}>
                        {data.map((show, index) => {
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