import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "/src/context/auth/AuthContext";
import UserNavbar from "/src/components/UserNavbar";
import {AuthHooks} from "/src/hooks/Hooks";
import Head from "../../components/Head.jsx";

const AuthIndex = () => {
    const {currentUser} = AuthHooks();
    const supaUser = JSON.parse(localStorage.getItem('sb-oujrmdgposodbdwuulbf-auth-token'));
    return (
        currentUser &&
        <>
            <section className={`mb-11`}>
                <div className={`bg-[#262626]`}>
                    <div className={`container`}>
                        <div className={`flex flex-wrap items-center gap-16 py-11`}>
                            <div className={`flex items-center`}>
                                <div
                                    className={`w-[100px] h-[100px] rounded-full border-4 border-[#0F0F0F] mr-4`}>
                                    <img
                                        src={currentUser?.profile_picture ? currentUser?.profile_picture : `/images/hugh.jpg`}
                                        alt={currentUser?.username}
                                        title={currentUser?.username}
                                        className={`object-fill w-full h-full rounded-full`}
                                    />
                                </div>
                                <div className={`text-white font-medium capitalize my-3`}>
                                    <p className={`text-3xl font-bold`}>{currentUser?.username}</p>
                                    <p className={`text-xl`}>{currentUser?.subscription} plan</p>
                                </div>
                            </div>
                            <Link
                                to={`/subscriptions`}
                                className={`w-full md:w-auto capitalize bg-[#E50000] px-4 py-3 rounded-lg text-white transition ease-linear duration-500 hover:bg-opacity-70`}>
                                {currentUser?.subscription?.toLowerCase() === "free" ? `Subscribe` : `Upgrade`} plan
                            </Link>
                        </div>
                        <UserNavbar currentUser={currentUser} supaUser={supaUser}/>
                    </div>
                </div>
                <Outlet/>
            </section>
        </>
    )
}

export default AuthIndex;