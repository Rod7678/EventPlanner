import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RouterLayout () {
    return (
        <>
        <MainNavigation />
        <main>
        <Outlet />
        </main>
        </>
    )
};

export default RouterLayout;