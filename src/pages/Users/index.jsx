import { useState, useEffect } from "react";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Pagination from "../../components/Pagination";
import DropdownMenu from "../../components/DropdowmMenu";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://beta.getdexterapp.com/api/test"
                );

                const data = await response.json();

                setUsers(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleFilterClick = () => {
        setFilteredUsers(users.filter((user) => !user.shop && !user.business));
    };

    const handleResetClick = () => {
        setFilteredUsers([]);
    };

    console.log(users);
    return (
        <div className="h-[85vh]  relative">
            <div className="pb-10">
                <DropdownMenu
                    handleFilterClick={handleFilterClick}
                    handleResetClick={handleResetClick}
                />

                {loading ? (
                    <div className=" flex items-center justify-center">
                        <div className="loader"></div>
                    </div>
                ) : (
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

                        {filteredUsers.length > 0
                            ? filteredUsers.map((user) => (
                                  <tr
                                      key={user.id}
                                      className="border-b border-b-[#8BB17480]"
                                  >
                                      <td className="pl-2 text-left py-4 text-sm font-normal">
                                          {user.first_name} {user.last_name}
                                      </td>
                                      <td className=" text-left py-4 text-sm font-normal">
                                          Lekki Phase 1
                                      </td>
                                      <td className=" text-left py-4 text-sm font-normal">
                                          4th Mar 2023
                                      </td>
                                      <td className="text-sm py-4 font-normal">
                                          {user?.shop?.service?.id}
                                      </td>
                                      <td className="text-sm py-4 font-normal">
                                          <HiMiniEllipsisVertical
                                              size={20}
                                              className=" text-black text-center mx-auto"
                                          />
                                      </td>
                                  </tr>
                              ))
                            : users.map((user) => (
                                  <tr
                                      key={user.id}
                                      className="border-b border-b-[#8BB17480]"
                                  >
                                      <td className="pl-2 text-left py-4 text-sm font-normal">
                                          {user.first_name} {user.last_name}
                                      </td>
                                      <td className=" text-left py-4 text-sm font-normal">
                                          Lekki Phase 1
                                      </td>
                                      <td className=" text-left py-4 text-sm font-normal">
                                          4th Mar 2023
                                      </td>
                                      <td className="text-sm py-4 font-normal">
                                          {user?.shop?.service?.id}
                                      </td>
                                      <td className="text-sm py-4 font-normal">
                                          <HiMiniEllipsisVertical
                                              size={20}
                                              className=" text-black text-center mx-auto"
                                          />
                                      </td>
                                  </tr>
                              ))}
                    </table>
                )}
            </div>

            <Pagination />
        </div>
    );
};

export default Users;
