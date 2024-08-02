import {useContext} from "react";
import {FavoriteContext, MoviesContext, SeriesContext} from "/src/context/Context";
import SectionTitle from "../../components/SectionTitle.jsx";
import {MovieComponent} from "../../components/MovieCards.jsx";

const Favorites = () => {
    const {movies} = useContext(MoviesContext);
    const {series} = useContext(SeriesContext);
    return (
        <>
            <section className={"pb-11"}>
                <div className={"container"}>
                    <div className={"pt-11"}>
                        <SectionTitle heading={"Favorites movies"}/>
                        {/*<div className={"flex items-center flex-wrap gap-5 my-5"}>*/}
                        {/*    {favMovies.map((movie, index) => {*/}
                        {/*        return (*/}
                        {/*            <div className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]`} key={index}>*/}
                        {/*                <MovieComponent {...movie} />*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}
                    </div>
                    <div className={"pt-11"}>
                        <SectionTitle heading={"Favorites series"}/>
                        {/*<div className={"flex items-center flex-wrap gap-5 my-5"}>*/}
                        {/*    {favSeries.map((series, index) => {*/}
                        {/*        return (*/}
                        {/*            <div className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]`} key={index}>*/}
                        {/*                <MovieComponent {...series} />*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    })}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Favorites;