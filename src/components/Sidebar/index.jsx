import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { TwoUsers, User } from "react-iconly";
import { MessageQuestion, TruckFast, ShoppingCart } from "iconsax-react";

import dexterLogo from "../../assets/logo.png";

const Sidebar = () => {
    return (
        <section className=" w-[20%] 2xl:w-[15%]  h-screen text-white bg-[#3A5743]">
            <div>
                <img src={dexterLogo} alt="" />
            </div>
            <Link to={"/"}>
                <HiOutlineHome size={24} />
                <p>Home</p>
            </Link>
            <Link to={"/service-request"}>
                <MessageQuestion />
                <p>Service Request</p>
            </Link>
            <Link to={"/vendors"}>
                <User />
                <p>Vendors</p>
            </Link>
            <Link to={"/users"}>
                <TwoUsers />
                <p>Users</p>
            </Link>
            <Link to={"/services"}>
                <TruckFast />
                <p>Services</p>
            </Link>
            <Link to={"/payments"}>
                <ShoppingCart />
                <p>Payments</p>
            </Link>
        </section>
    );
};

export default Sidebar;
