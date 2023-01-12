import { NavLink } from "react-router-dom"
import { ConteinerNavLinks, StyledNavLink } from "./NavMenu.styles";

export default function NavMenu() {
    return (
        <>
            <ConteinerNavLinks>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/about">About</StyledNavLink>
                <StyledNavLink to="/projects">Projects</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </ConteinerNavLinks>
        </>
    )
}