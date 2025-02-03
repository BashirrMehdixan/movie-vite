import { useContext } from "react";
import Head from "/src/components/head/Head";
import { FavoriteContext } from "/src/context/Context";
import FavoriteComponent from "/src/components/cards/FavoriteComponent";

const Favorites = () => {
    const { favoriteMovies, favoriteShows } = useContext(FavoriteContext);
    return (
        <>
            <Head title={`Favorites`} />
            <section className={`pb-11`}>
                <div className={`container`}>
                    <div className={`pt-11`}>
                        <FavoriteComponent
                            title={`Favorites movies`}
                            emptyMessage={`There's no favorite movies`}
                            favorites={favoriteMovies} />
                    </div>
                    <div className={`pt-11`}>
                        <FavoriteComponent
                            title={`Favorites Series`}
                            emptyMessage={`There's no favorite shows`}
                            favorites={favoriteShows} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Favorites;