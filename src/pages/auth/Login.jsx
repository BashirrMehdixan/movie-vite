import Head from "/src/components/Head";
import { AuthHooks } from "/src/hooks/Hooks";

const Login = () => {
    const { loginAction, dataHandler, data } = AuthHooks();
    return (
        <>
            <Head title={`Login`} />
            <div className={`relative h-screen bg-[url(/images/login-bg.jpg)] bg-cover bg-center`}>
                <div className="absolute w-full h-full bg-[#0F0F0F] bg-opacity-65 z-10"></div>
                <div className="container h-full">
                    <form onSubmit={(e) => loginAction(e, data)}
                        className={`h-full flex flex-wrap justify-center items-center text-white`}>
                        <div
                            className="relative w-full lg:w-1/3 pt-4 pb-2 px-6 bg-[#0F0F0F] bg-opacity-80 border border-[#262626] rounded-lg z-20">
                            <div className="w-full">
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <span>Email</span>
                                        <input
                                            type="text"
                                            className={`w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1`}
                                            id={`email`}
                                            onChange={(e) => dataHandler(e)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className={`mb-3`}>
                                    <label htmlFor="password">
                                        <span>Password</span>
                                        <input
                                            type="password"
                                            id={`password`}
                                            onChange={(e) => dataHandler(e)}
                                            className={`w-full text-white bg-[#262626] p-3 rounded-md border-0 focus:outline-0 mt-1`} />
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className={`bg-[#E50000] px-8 py-4 rounded-lg mb-3`}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;