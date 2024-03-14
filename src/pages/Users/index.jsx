import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Pagination from "../../components/Pagination";

const Users = () => {
    return (
        <div className="h-[85vh]  relative">
            <div className="py-10">
                <table className=" bg-white w-full text-center text-[#8D9091]">
                    <tr className=" text-left py-4 border-b border-b-black">
                        <th className=" text-left pl-2 py-4 text-sm font-normal">
                            Name
                        </th>
                        <th className=" text-left py-4 text-sm font-normal">
                            Location
                        </th>
                        <th className=" text-left py-4 text-sm font-normal">
                            Date Joined
                        </th>
                        <th className=" text-center py-4 text-sm font-normal">
                            Services Requested
                        </th>
                        <th className=" text-center py-4 text-sm font-normal">
                            Action
                        </th>
                    </tr>

                    <tr className="border-b border-b-[#8BB17480]">
                        <td className="pl-2 text-left py-4 text-sm font-normal">
                            Victor Chibueze Oluwafemi
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            Lekki Phase 1
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            4th Mar 2023{" "}
                        </td>
                        <td className="text-sm py-4 font-normal">1</td>
                        <td className="text-sm py-4 font-normal">
                            <HiMiniEllipsisVertical
                                size={20}
                                className=" text-black text-center mx-auto"
                            />
                        </td>
                    </tr>
                    <tr className="border-b border-b-[#8BB17480]">
                        <td className="pl-2 text-left py-4 text-sm font-normal">
                            Victor Chibueze Oluwafemi
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            Lekki Phase 1
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            4th Mar 2023{" "}
                        </td>
                        <td className="text-sm py-4 font-normal">1</td>
                        <td className="text-sm py-4 font-normal">
                            <HiMiniEllipsisVertical
                                size={20}
                                className=" text-black text-center mx-auto"
                            />
                        </td>
                    </tr>
                    <tr className="border-b border-b-[#8BB17480]">
                        <td className="pl-2 text-left py-4 text-sm font-normal">
                            Victor Chibueze Oluwafemi
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            Lekki Phase 1
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            4th Mar 2023{" "}
                        </td>
                        <td className="text-sm py-4 font-normal">1</td>
                        <td className="text-sm py-4 font-normal">
                            <HiMiniEllipsisVertical
                                size={20}
                                className=" text-black text-center mx-auto"
                            />
                        </td>
                    </tr>
                    <tr className="border-b border-b-[#8BB17480]">
                        <td className="pl-2 text-left py-4 text-sm font-normal">
                            Victor Chibueze Oluwafemi
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            Lekki Phase 1
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            4th Mar 2023{" "}
                        </td>
                        <td className="text-sm py-4 font-normal">1</td>
                        <td className="text-sm py-4 font-normal">
                            <HiMiniEllipsisVertical
                                size={20}
                                className=" text-black text-center mx-auto"
                            />
                        </td>
                    </tr>
                    <tr className="border-b border-b-[#8BB17480]">
                        <td className="pl-2 text-left py-4 text-sm font-normal">
                            Victor Chibueze Oluwafemi
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            Lekki Phase 1
                        </td>
                        <td className=" text-left py-4 text-sm font-normal">
                            4th Mar 2023{" "}
                        </td>
                        <td className="text-sm py-4 font-normal">1</td>
                        <td className="text-sm py-4 font-normal">
                            <HiMiniEllipsisVertical
                                size={20}
                                className=" text-black text-center mx-auto"
                            />
                        </td>
                    </tr>
                </table>
            </div>

            <Pagination />
        </div>
    );
};

export default Users;
