import { nanoid } from 'nanoid';

export const itemsMenu = [
    {
        text: "Home",
        id: nanoid(),
        to: "/"
    },
    {
        text: "About",
        id: nanoid(),
        to: "/about"
    },
    {
        text: "Projects",
        id: nanoid(),
        to: "/projects"
    },
    {
        text: "Contacts",
        id: nanoid(),
        to: "/contacts"
    }
]