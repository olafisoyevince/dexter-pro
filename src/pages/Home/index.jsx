import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import TopRatedVendors from "../../components/TopRatedVendors";
import TopRatedUsers from "../../components/TopRatedUsers";
import Stats from "../../components/Stats";
import calender from "../../assets/calender.png";
import graph from "../../assets/graph.png";

const Home = () => {
    return (
        <>
            <Stats />

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

                    <div className=" rounded-lg h-auto mt-7 bg-white px-4 pt-4 pb-32">
                        <img src={graph} alt="" />
                    </div>
                </div>

                <div className=" w-[34%] h-[600px] flex flex-col gap-4 ">
                    <TopRatedVendors />

                    <TopRatedUsers />
                </div>
            </div>
        </>
    );
};

export default Home;
