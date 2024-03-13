import { HiOutlineHome } from "react-icons/hi2";
import { TwoUsers, User } from "react-iconly";
import { MessageQuestion, TruckFast, ShoppingCart } from "iconsax-react";

export const sidebarData = [
    {
        id: 1,
        route: "/",
        icon: <HiOutlineHome size={24} />,
        title: "Home",
    },
    {
        id: 2,
        route: "/service-request",
        icon: <MessageQuestion />,
        title: "Service Request",
    },
    {
        id: 3,
        route: "/vendors",
        icon: <User />,
        title: "Vendors",
    },
    {
        id: 4,
        route: "/users",
        icon: <TwoUsers />,
        title: "Users",
    },
    {
        id: 5,
        route: "/services",
        icon: <TruckFast />,
        title: "Services",
    },
    {
        id: 6,
        route: "/payments",
        icon: <ShoppingCart />,
        title: "Payments",
    },
];
