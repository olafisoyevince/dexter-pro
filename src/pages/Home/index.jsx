import threemen from "../../assets/threemen.png";
import gear from "../../assets/gear.png";
import service from "../../assets/service.png";
import users from "../../assets/users.png";
import calender from "../../assets/calender.png";
import avatar from "../../assets/avatar.png";
import ratings from "../../assets/ratings.png";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const Home = () => {
    return (
        <div className=" ">
            <div className="flex justify-between pt-8 pb-12">
                <div className="  bg-white rounded-[10px] w-[227px] h-[200px] 2xl:w-[300px] 2xl:h-[250px] shadow">
                    <div className=" mt-4 2xl:mt-6 ml-6 2xl:ml-8 h-[60px] 2xl:h-[80px] w-[60px] 2xl:w-[80px] rounded-full bg-[#1B264F40] flex justify-center items-center">
                        <img src={threemen} alt="" />
                    </div>

                    <div className=" pt-6">
                        <h1 className=" text-[32px] 2xl:text-5xl font-semibold text-center ">
                            350
                        </h1>
                        <h2 className=" text-[#5B5B5B] text-lg 2xl:text-2xl font-semibold text-center">
                            Vendors
                        </h2>
                    </div>
                </div>
                <div className="  bg-white rounded-[10px] w-[227px] h-[200px] 2xl:w-[300px] 2xl:h-[250px] shadow">
                    <div className=" mt-4 2xl:mt-6 ml-6 2xl:ml-8 h-[60px] 2xl:h-[80px] w-[60px] 2xl:w-[80px] rounded-full bg-[#F7B32B40] flex justify-center items-center">
                        <img src={gear} alt="" />
                    </div>

                    <div className=" pt-6">
                        <h1 className=" text-[32px] 2xl:text-5xl font-semibold text-center text-[#F7B32B] ">
                            10
                        </h1>
                        <h2 className=" text-[#5B5B5B] text-lg 2xl:text-2xl font-semibold text-center">
                            Active Services
                        </h2>
                    </div>
                </div>
                <div className="  bg-white rounded-[10px] w-[227px] h-[200px] 2xl:w-[300px] 2xl:h-[250px] shadow">
                    <div className=" mt-4 2xl:mt-6 ml-6 2xl:ml-8 h-[60px] 2xl:h-[80px] w-[60px] 2xl:w-[80px] rounded-full bg-[#C1292E40] flex justify-center items-center">
                        <img src={service} alt="" />
                    </div>

                    <div className=" pt-6">
                        <h1 className=" text-[32px] 2xl:text-5xl font-semibold text-center text-[#C1292E] ">
                            56
                        </h1>
                        <h2 className=" text-[#5B5B5B] text-lg 2xl:text-2xl font-semibold text-center">
                            Active Service Requests
                        </h2>
                    </div>
                </div>
                <div className="  bg-white rounded-[10px] w-[227px] h-[200px] 2xl:w-[300px] 2xl:h-[250px] shadow">
                    <div className=" mt-4 2xl:mt-6 ml-6 2xl:ml-8 h-[60px] 2xl:h-[80px] w-[60px] 2xl:w-[80px] rounded-full bg-[#1B264F40] flex justify-center items-center">
                        <img src={users} alt="" />
                    </div>

                    <div className=" pt-6">
                        <h1 className=" text-[32px] 2xl:text-5xl font-semibold text-center ">
                            1100+
                        </h1>
                        <h2 className=" text-[#5B5B5B] text-lg 2xl:text-2xl font-semibold text-center">
                            Vendors
                        </h2>
                    </div>
                </div>
            </div>

            <div className=" flex gap-8 mb-7">
                <div className=" w-[66%] h-[650px]">
                    <div className=" flex justify-between items-center bg-white h-[38px] rounded-md">
                        <h1 className="text-[#6A6B6D] font-semibold text-xl pl-[12px]">
                            Users on Dexter App
                        </h1>

                        <div className=" flex items-center gap-2 border rounded-md px-4 h-full">
                            <img src={calender} alt="" />
                            <p className=" text-[#8D9091] ">Last 6 months</p>
                            <ArrowLeft2 size="20px" color="#8D9091" />
                            <ArrowRight2 size="20px" color="#8D9091" />
                        </div>
                    </div>

                    <div className=" rounded-lg h-[540px] mt-7 bg-white"></div>
                </div>

                <div className=" w-[34%] h-[600px] flex flex-col gap-4 ">
                    <div className=" bg-white rounded-lg px-5">
                        <h1 className=" text-xl text-center pt-3 pb-7 font-medium text-[#6A6B6D]">
                            Top Rated Vendors
                        </h1>

                        <div className=" flex flex-col gap-4 pb-3">
                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm pl-2">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div className=" ">
                                    <p className=" font-light text-xs text-center">
                                        Electrician
                                    </p>
                                </div>

                                <div className=" ">
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm pl-2 text-[#4C4C4C]">
                                        Tolani Chelsea
                                    </p>
                                </div>

                                <div className=" ">
                                    <p className=" font-light text-xs">
                                        House Cleaner
                                    </p>
                                </div>

                                <div className=" ">
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm pl-2">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div className=" ">
                                    <p className=" font-light text-xs text-center">
                                        Electrician
                                    </p>
                                </div>

                                <div className=" ">
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm pl-2">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div className=" ">
                                    <p className=" font-light text-xs text-center">
                                        Electrician
                                    </p>
                                </div>

                                <div className=" ">
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm pl-2">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div className=" ">
                                    <p className=" font-light text-xs text-center">
                                        Electrician
                                    </p>
                                </div>

                                <div className=" ">
                                    <img src={ratings} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" bg-white rounded-lg px-5">
                        <h1 className=" text-xl text-center pt-3 pb-7 font-medium text-[#6A6B6D]">
                            Top Rated Users
                        </h1>

                        <div className=" flex flex-col gap-4 pb-3">
                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div>
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div>
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div>
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div>
                                    <img src={ratings} alt="" />
                                </div>
                            </div>

                            <div className=" flex items-center justify-between">
                                <div className=" flex items-center">
                                    <div>
                                        <img src={avatar} alt="" />
                                    </div>
                                    <p className=" font-medium text-sm">
                                        Esosa Bolaji
                                    </p>
                                </div>

                                <div>
                                    <img src={ratings} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
