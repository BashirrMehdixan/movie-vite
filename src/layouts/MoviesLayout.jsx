import {Outlet} from "react-router-dom";

const MoviesLayout = () => {
    return (
        <div className={"movies-section"}>
            <Outlet/>
        </div>
    )
}
export default MoviesLayout;