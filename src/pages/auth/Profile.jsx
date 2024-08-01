import {useContext} from "react";
import {AuthContext} from "/src/context/auth/AuthContext";
import SectionTitle from "/src/components/SectionTitle";
import {EditProfileModal, PasswordModal} from "/src/modals/EditModals";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <>
            <div className="container">
                <div className="flex items-center justify-between pt-9 pb-5">
                    <SectionTitle heading={"Account and security"}/>
                    <EditProfileModal/>
                </div>
                <div className={"bg-[#262626] rounded-md py-4"}>
                    <div className={"flex flex-wrap items-center mb-3 px-5"}>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Firstname: </p>
                                    <p className={"capitalize"}>
                                        {user.firstname}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Lastname: </p>
                                    <p className={"capitalize"}>
                                        {user.lastname}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Gender: </p>
                                    <p className={"capitalize"}>
                                        {user.gender}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Date of birth: </p>
                                    <p className={"capitalize"}>
                                        {user.birthday}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Username: </p>
                                    <p>
                                        {user.username}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"flex items-center gap-2"}>
                                    <p className={"text-xl font-semibold"}>Email: </p>
                                    <p>
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 lg:pr-4"}>
                            <div
                                className="flex items-center justify-between text-white py-6 border-b border-opacity-45">
                                <div className={"text-xl font-medium"}>
                                    Forgot password?
                                </div>
                                <PasswordModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;