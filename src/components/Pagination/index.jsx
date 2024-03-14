import { ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";
import React from "react";

const Pagination = () => {
    const numbers = [1, 2, 3, 4, 5, 6, "...", 10];

    return (
        <div className="bg-white h-[48px] rounded-lg px-3 flex items-center justify-between text-[#8D9091] text-sm font-normal absolute bottom-0 left-0 right-0">
            <p>1-11 of 875 items</p>

            <div className="flex gap-6">
                <ArrowSquareLeft className="cursor-pointer" />
                <div className="flex gap-1 cursor-pointer">
                    {numbers.map((num, i) => (
                        <div
                            key={i}
                            className={`h-6 w-6 flex justify-center items-center hover:bg-[#3A5743] hover:text-white rounded-[4px] ${
                                i === 0 ? "active" : ""
                            }`}
                        >
                            {num}
                        </div>
                    ))}
                </div>

                <ArrowSquareRight className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Pagination;
