import { NavLink } from "react-router-dom"
import { ConteinerNavLinks, StyledNavLink } from "./NavMenu.styles";

export default function NavMenu() {
    return (
        <>
            <ConteinerNavLinks>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
                <StyledNavLink to="/library">My library</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </ConteinerNavLinks>
        </>
    )
}