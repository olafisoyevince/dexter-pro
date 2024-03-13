import { topRatedVendorsData } from "../../lib/utils";
import ratings from "../../assets/ratings.png";

const TopRatedVendors = () => {
    return (
        <div className=" bg-white rounded-lg px-5">
            <h1 className=" text-xl text-center pt-3 pb-7 font-medium text-[#6A6B6D]">
                Top Rated Vendors
            </h1>

            <div className=" flex flex-col gap-4 pb-3">
                {topRatedVendorsData.map(({ id, avatar, name, job }) => (
                    <div
                        className=" flex items-center justify-between"
                        key={id}
                    >
                        <div className=" flex items-center w-[40%] ">
                            <div>
                                <img src={avatar} alt="" />
                            </div>
                            <p className=" font-medium text-sm pl-2">{name}</p>
                        </div>

                        <div className=" ">
                            <p className=" font-light text-xs text-center">
                                {job}
                            </p>
                        </div>

                        <div className=" ">
                            <img src={ratings} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedVendors;
