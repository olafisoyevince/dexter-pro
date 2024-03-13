import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AppLayout = () => (
    <main className=" flex h-screen">
        <Sidebar />
        <section className=" w-[80%] h-full 2xl:w-[85%] bg-[#FAFAFA] pl-[24px] pt-[48px] pr-[60px]">
            <Navbar />
            <Outlet />
        </section>
    </main>
);

export default AppLayout;
