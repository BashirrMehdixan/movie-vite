import { NavLink } from "react-router-dom";

const RegisterNavbar = () => {
    return (
        <>
            <header className={`w-full fixed py-3 z-20 bg-gradient-to-b from-current to-transparent`}>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <NavLink to={`/`}>
                            <img src="/images/logo.png" className={`w-48`} alt="StreamVibe" />
                        </NavLink>
                        <NavLink
                            to={`${location.pathname === `/register` ? `/login` : `register`}`}
                            className={`border-2 border-[#262626] text-white py-4 px-9 transition duration-500 hover:bg-[#E50000] rounded-xl`}>
                            {`${location.pathname === `/register` ? "Login" : `Register`}`}
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default RegisterNavbar;