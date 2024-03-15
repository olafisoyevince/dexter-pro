import threemen from "../../assets/threemen.png";
import gear from "../../assets/gear.png";
import service from "../../assets/service.png";
import users from "../../assets/users.png";

const Stats = () => {
    return (
        <div className="flex justify-between pt-8 pb-12">
            <div className="  bg-white rounded-[10px] w-[227px] h-[200px]shadow">
                <div className=" mt-4 ml-6 h-[60px] w-[60px] rounded-full bg-[#1B264F40] flex justify-center items-center">
                    <img src={threemen} alt="" />
                </div>

                <div className=" pt-6">
                    <h1 className=" text-[32px] font-semibold text-center ">
                        350
                    </h1>
                    <h2 className=" text-[#5B5B5B] text-lg font-semibold text-center">
                        Vendors
                    </h2>
                </div>
            </div>

            <div className="  bg-white rounded-[10px] w-[227px] h-[200px] shadow">
                <div className=" mt-4 ml-6 h-[60px] w-[60px] rounded-full bg-[#F7B32B40] flex justify-center items-center">
                    <img src={gear} alt="" />
                </div>

                <div className=" pt-6">
                    <h1 className=" text-[32px] font-semibold text-center text-[#F7B32B] ">
                        10
                    </h1>
                    <h2 className=" text-[#5B5B5B] text-lg font-semibold text-center">
                        Active Services
                    </h2>
                </div>
            </div>
            <div className="  bg-white rounded-[10px] w-[227px] h-[200px] shadow">
                <div className=" mt-4 ml-6 h-[60px] w-[60px] rounded-full bg-[#C1292E40] flex justify-center items-center">
                    <img src={service} alt="" />
                </div>

                <div className=" pt-6">
                    <h1 className=" text-[32px] font-semibold text-center text-[#C1292E] ">
                        56
                    </h1>
                    <h2 className=" text-[#5B5B5B] text-lg font-semibold text-center">
                        Active Service Requests
                    </h2>
                </div>
            </div>
            <div className="  bg-white rounded-[10px] w-[227px] h-[200px] shadow">
                <div className=" mt-4 ml-6 h-[60px] w-[60px] rounded-full bg-[#1B264F40] flex justify-center items-center">
                    <img src={users} alt="" />
                </div>

                <div className=" pt-6">
                    <h1 className=" text-[32px] font-semibold text-center ">
                        1100+
                    </h1>
                    <h2 className=" text-[#5B5B5B] text-lg font-semibold text-center">
                        Vendors
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Stats;
