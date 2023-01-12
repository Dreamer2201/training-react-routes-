import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ConteinerNavLinks = styled.nav`
    height: 75px;
    padding: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
    box-shadow: 0px 5px 2px #d8d8d8;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 4px;
    text-decoration: none;
    border-radius: 10px;
    background-color: white;
    color: black;
    &.active {
        box-shadow: 0px 5px 2px #d8d8d8;
        background-color: grey;
    }
    &:not(:last-child) {
        margin-right: 15px;
    }
`;

