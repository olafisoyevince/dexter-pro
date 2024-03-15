import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Notification, ArrowDown2, User } from "iconsax-react";

import notif from "../../assets/notif.png";

const Navbar = () => {
    const [title, setTitle] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        switch (pathname) {
            case "/":
                setTitle("Welcome Dexter Admin,");
                break;

            case "/service-request":
                setTitle("Service Requests");
                break;

            case "/vendors":
                setTitle("Vendors");
                break;

            case "/users":
                setTitle("Users");
                break;

            case "/services":
                setTitle("Services");
                break;

            case "/payments":
                setTitle("Payments");
                break;

            default:
                setTitle("Welcome Dexter Admin,");
                break;
        }
    }, [pathname]);

    return (
        <nav className=" bg-white h-[48px] rounded-lg px-2 flex items-center justify-between">
            <h1 className=" font-semibold text-xl">{title}</h1>

            <div className=" flex items-center gap-6">
                <img src={notif} alt="" />

                <div className=" flex items-center gap-2">
                    <div className=" bg-[#CCE1BF] rounded-full h-8 w-8 flex justify-center items-center">
                        <User size="16" variant="TwoTone" />
                    </div>
                    <p className=" text-#5B5B5B">Admin</p>
                </div>

                <ArrowDown2 color="#5B5B5B" />
            </div>
        </nav>
    );
};

export default Navbar;
