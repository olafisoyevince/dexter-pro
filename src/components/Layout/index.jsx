import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AppLayout = () => (
    <main className=" flex h-screen">
        <Sidebar />
        <section className=" w-[80%] h-full overflow-auto 2xl:w-[85%] bg-[#FAFAFA] pl-[24px] 2xl:pl-[32px] pt-[48px] 2xl:pt-[56px] pr-[60px] 2xl:pr-[80px]">
            <Navbar />
            <Outlet />
        </section>
    </main>
);

export default AppLayout;
