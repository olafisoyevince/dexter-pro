import { HiOutlineHome } from "react-icons/hi2";
import { TwoUsers, User } from "react-iconly";
import { MessageQuestion, TruckFast, ShoppingCart } from "iconsax-react";

import avatar from "../assets/avatar.png";

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

export const topRatedVendorsData = [
    {
        id: 1,
        avatar: avatar,
        name: "Esosa Bolaji",
        job: "Electrician",
    },
    {
        id: 2,
        avatar: avatar,
        name: "Efik Ayo",
        job: "Carpenter",
    },
    {
        id: 3,
        avatar: avatar,
        name: "Victor Siji",
        job: "Makeup Artiste",
    },
    {
        id: 4,
        avatar: avatar,
        name: "Tolani Chelsea",
        job: "House Cleaner",
    },
    {
        id: 5,
        avatar: avatar,
        name: "Amala Moon",
        job: "Restaurant",
    },
];

export const topRatedUsersData = [
    {
        id: 1,
        avatar: avatar,
        name: "Coco M",
    },
    {
        id: 2,
        avatar: avatar,
        name: "Ifeoluwa",
    },
    {
        id: 3,
        avatar: avatar,
        name: "Oluchi",
    },
    {
        id: 4,
        avatar: avatar,
        name: "Emiliano Rora",
    },
    {
        id: 5,
        avatar: avatar,
        name: "Sabi Girl",
    },
];

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    const [month, day, year] = formattedDate.split(" ");

    return `${parseInt(day)}${getDaySuffix(parseInt(day))} ${month} ${year}`;
};

const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + "...";
    }
};
