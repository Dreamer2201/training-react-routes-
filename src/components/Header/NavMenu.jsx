import { NavLink } from "react-router-dom"

export default function NavMenu() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </>
    )
}