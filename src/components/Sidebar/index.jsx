import { NavLink } from "react-router-dom";
import { sidebarData } from "../../lib/utils";

import dexterLogo from "../../assets/logo.png";

const Sidebar = () => {
    return (
        <section className=" h-full w-[20%] 2xl:w-[15%] flex-1 text-[#CFCCD6] bg-[#3A5743]">
            <div className="p-[21px]">
                <div className=" h-[71.43px] w-[80px]">
                    <img src={dexterLogo} alt="" className=" object-cover" />
                </div>

                <div className=" flex flex-col gap-3 pt-[38.57px]">
                    {sidebarData.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.route}
                            className={({ isActive }) =>
                                isActive ? "text-[#FFBA49]" : "text-[#CFCCD6]"
                            }
                        >
                            <div className=" py-3 px-3 hover:text-[#FFBA49] flex gap-2">
                                {item.icon}
                                <p>{item.title}</p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
