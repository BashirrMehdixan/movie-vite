import {useState, useContext, useRef, useEffect} from "react";
import {Modal} from 'react-responsive-modal';
// Icons
import {Edit} from "react-huge-icons/outline";
// Context
import {AuthContext} from "/src/context/auth/AuthContext";
import AuthHooks from "/src/hooks/auth/AuthHooks";

const EditProfileModal = () => {
    const {user} = useContext(AuthContext);
    const {dataHandler, updateData, data, setGender, profilePicture, handleImageChange} = AuthHooks();
    const [open, setOpen] = useState(false);
    const [openSelect, setOpenSelect] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const handleImageChangePreview = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
        handleImageChange(e); // Profil resmi güncelleme
    };

    const getImageSrc = () => {
        return imagePreview || user.profile_picture || "/images/hugh.jpg";
    };

    return (
        <>
            <button
                className={"bg-[#E50000] transition ease-linear duration-300 hover:bg-opacity-45 px-6 py-3 rounded-lg text-white"}
                onClick={() => setOpen(true)}>
                Edit
            </button>
            <Modal
                open={open}
                closeOnOverlayClick={true}
                classNames={{
                    modal: "custom-form-modal"
                }}
                onClose={() => setOpen(false)}
                center>
                <form onSubmit={(e) => updateData(e, data)}>
                    <div className={"flex flex-wrap items-center"}>
                        <div className={"w-full mb-3"}>
                            <div
                                className={"relative w-[130px] h-[130px] border-4 border-[#0F0F0F] rounded-full mx-auto"}>
                                <label htmlFor={"userImg"}>
                                    <img
                                        src={getImageSrc()}
                                        alt={user.username}
                                        className={"w-full h-full rounded-full object-fill"}/>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChangePreview}
                                        accept={"image/png image/jpeg image/jpg"}
                                        className={"absolute w-full h-full opacity-0"}/>
                                </label>
                                <button
                                    type={"button"}
                                    onClick={() => fileInputRef.current.click()}
                                    className={"absolute bg-[#262626] bottom-0 right-0 rounded-full p-2"}>
                                    <Edit className={"text-xl"}/>
                                </button>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor="firstname">Firstname</label>
                            <input
                                type="text"
                                defaultValue={user.firstname}
                                onChange={(e) => dataHandler(e)}
                                id={"firstname"}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"lastname"}>Lastname</label>
                            <input
                                type="text"
                                defaultValue={user.lastname}
                                onChange={(e) => dataHandler(e)}
                                id={"lastname"}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"username"}>Username</label>
                            <input
                                type="text"
                                id={"username"}
                                defaultValue={user.username}
                                onChange={(e) => dataHandler(e)}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor="gender">
                                Gender
                            </label>
                            <div
                                onClick={() => setOpenSelect(!openSelect)}
                                className={`relative w-full bg-[#262626] cursor-pointer border-2 border-white p-3 transition duration-500 focus:border-[#E50000] rounded-md mt-1 mb-3`}>
                                <span className={"cursor-pointer"}>{user.gender}</span>
                                <ul
                                    className={`absolute w-full left-0 top-[50px] bg-[#262626] transition duration-300 origin-top rounded-lg ${!openSelect ? "scale-y-0" : "scale-y-100"}`}>
                                    <li className={"cursor-default p-3 opacity-45"}>
                                        Gender
                                    </li>
                                    <li className={"cursor-pointer p-3"}
                                        onClick={(e) => setGender(e.target.innerText)}>
                                        Male
                                    </li>
                                    <li className={"cursor-pointer p-3"}
                                        onClick={(e) => setGender(e.target.innerText)}>
                                        Female
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"email"}>Email</label>
                            <input
                                type="text"
                                id={"email"}
                                onChange={(e) => dataHandler(e)}
                                defaultValue={user.email}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"date"}>Date of Birth</label>
                            <input
                                type="text"
                                id={"date"}
                                onChange={(e) => dataHandler(e)}
                                defaultValue={user.birthday}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full mb-2 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"password"}>Password</label>
                            <input
                                type="password"
                                onChange={(e) => dataHandler(e, data)}
                                id={"password"}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg disabled:opacity-45 focus:outline-none"}
                            />
                        </div>
                        {/*<div className={"w-full md:w-1/2 mb-2 pr-0 md:pr-3"}>*/}
                        {/*    <label*/}
                        {/*        className={"text-lg font-medium"}*/}
                        {/*        htmlFor={"password"}>Confirm Password</label>*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        id={"confirmPassword"}*/}
                        {/*        disabled={true}*/}
                        {/*        className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg disabled:opacity-45 focus:outline-none"}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className={"w-full flex justify-end"}>
                            <button
                                className={`text-white bg-[#E50000] px-6 py-3 rounded-lg transition duration-500 hover:opacity-60`}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

const PasswordModal = () => {
    const {dataHandler, changePassword, data} = AuthHooks();
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className={"ease-linear duration-300 hover:text-[#E50000] px-6 py-3 rounded-lg text-white"}
                onClick={() => setOpen(true)}>
                Change Password
            </button>
            <Modal
                open={open}
                closeOnOverlayClick={true}
                classNames={{
                    modal: "custom-form-modal"
                }}
                onClose={() => setOpen(false)}
                center>
                <h3 className={"text-xl font-medium text-white mb-3"}>Change Password</h3>
                <form onSubmit={(e) => changePassword(e, data)}>
                    <div className={"flex flex-wrap items-center"}>
                        <div className={"w-full mb-4 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor="password">Password</label>
                            <input
                                type="password"
                                onChange={(e) => dataHandler(e)}
                                id={"password"}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full mb-4 pr-0 md:pr-3"}>
                            <label
                                className={"text-lg font-medium"}
                                htmlFor={"confirmPassword"}>Confirm password</label>
                            <input
                                type="password"
                                onChange={(e) => dataHandler(e)}
                                id={"confirmPassword"}
                                className={"w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg focus:outline-none"}
                            />
                        </div>
                        <div className={"w-full flex justify-end pr-0 lg:pr-3"}>
                            <button
                                className={`text-white bg-[#E50000] px-6 py-3 rounded-lg transition duration-500 hover:opacity-60`}>
                                Change password
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export {EditProfileModal, PasswordModal};