import {useContext} from "react";
import {FavoriteContext} from "/src/context/Context";
import SectionTitle from "/src/components/SectionTitle";
import {MovieComponent} from "/src/components/MovieCards";
import FavoriteComponent from "../../components/FavoriteComponent.jsx";

const Favorites = () => {
    const {favoriteMovies, favoriteSeries} = useContext(FavoriteContext);
    return (
        <>
            <section className={"pb-11"}>
                <div className={"container"}>
                    <div className={"pt-11"}>
                        <FavoriteComponent
                            title={"Favorites movies"}
                            emptyMessage={"There's no favorite movies"}
                            favorites={favoriteMovies}/>
                    </div>
                    <div className={"pt-11"}>
                        <FavoriteComponent
                            title={"Favorites Series"}
                            emptyMessage={"There's no favorite series"}
                            favorites={favoriteSeries}/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Favorites;