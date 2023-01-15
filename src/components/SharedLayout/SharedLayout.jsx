import { Outlet } from "react-router-dom";
import NavMenu from "components/Header/NavMenu";

export default function SharedLayut() {
    return (
        <>
            <NavMenu />
            <Outlet />
            <footer>Copyright 2023 &copy; </footer>
        </>
    )
}