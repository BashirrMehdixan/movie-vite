import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";

export const CategoryComponent = ({name}) => {
    return (
        <>
            <Link to={`/movies#${name.toLocaleLowerCase()}`}
                  className={'block w-full transition-all duration-300 hover:scale-[.95]'}>
                <div className={"bg-[#262626] w-full p-2 rounded-xl"}>
                    <div className="p-3 overflow-hidden">
                        <img
                            src={"./images/category-img/action.png"}
                            className={'w-full'} alt=""/>
                    </div>
                    <div className="text-white flex items-center justify-between px-3 py-2">
                        <h3 className={"text-xl"}>{name}</h3>
                        <span>
                            <FaArrowRight/>
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}