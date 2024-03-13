import { Notification, ArrowDown2, User } from "iconsax-react";

const Navbar = () => {
    return (
        <nav className=" bg-white h-[48px] rounded-lg px-2 flex items-center justify-between">
            <h1 className=" font-semibold ">Welcome Dexter Admin,</h1>

            <div className=" flex items-center gap-6">
                <Notification color="#8D9091" />

                <div className=" flex items-center gap-2">
                    <div className=" bg-[#CCE1BF] rounded-full h-8 w-8 flex justify-center items-center">
                        <User size="16" variant="TwoTone" />
                    </div>
                    <p className=" text-#5B5B5B">Admin</p>
                </div>

                <ArrowDown2 color="#5B5B5B" />
            </div>
        </nav>
    );
};

export default Navbar;
