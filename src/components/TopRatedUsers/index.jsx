import { topRatedUsersData } from "../../lib/utils";
import ratings from "../../assets/ratings.png";

const TopRatedUsers = () => {
    return (
        <div className=" bg-white rounded-lg px-5">
            <h1 className=" text-xl text-center pt-3 pb-7 font-medium text-[#6A6B6D]">
                Top Rated Users
            </h1>

            <div className=" flex flex-col gap-4 pb-3">
                {topRatedUsersData.map(({ id, avatar, name }) => (
                    <div
                        className=" flex items-center justify-between"
                        key={id}
                    >
                        <div className=" flex items-center">
                            <div>
                                <img src={avatar} alt="" />
                            </div>
                            <p className=" font-medium text-sm">{name}</p>
                        </div>

                        <div>
                            <img src={ratings} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRatedUsers;
