import { DocumentFilter } from "iconsax-react";
import React, { useState } from "react";

const DropdownMenu = ({ handleFilterClick, handleResetClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Users");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className=" relative my-5 flex justify-end items-center">
            <button
                className="relative p-3 text-[#8D9091] text-sm font-normal border border-gray-300 rounded-[4px]"
                onClick={toggleDropdown}
            >
                <div className="flex gap-2">
                    <DocumentFilter size={20} />

                    <p className="text-sm font-normal">Filter</p>
                </div>
            </button>

            <div className="relative ">
                {isOpen && (
                    <ul className=" absolute right-0 mt-8 w-60  bg-white text-[#8D9091] border border-gray-300 rounded-md text-sm font-normal cursor-pointer">
                        <li
                            className="border-b border-gray-300 hover:bg-gray-50 rounded-t-md p-3 flex gap-2"
                            onClick={() => {
                                handleOptionSelect("Users"), handleResetClick();
                            }}
                        >
                            <div className=" w-2">
                                {selectedOption === "Users" ? (
                                    <div className="font-bold text-base">•</div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="flex items-center ">Users</div>
                        </li>
                        <li
                            className="p-3 flex gap-2 rounded-b-md hover:bg-gray-50"
                            onClick={() => {
                                handleOptionSelect(
                                    "Incomplete Registered Users"
                                );
                                handleFilterClick();
                            }}
                        >
                            <div className="w-2">
                                {selectedOption ===
                                "Incomplete Registered Users" ? (
                                    <div className="font-bold text-base">•</div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="flex items-center ">
                                Incomplete Registered Users
                            </div>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownMenu;
