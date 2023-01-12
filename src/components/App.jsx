
import { Routes, Route } from "react-router-dom";

import NavMenu from "./Header/NavMenu";
import HomePage from "pages/Home/HomePage";
import AboutPage from "pages/About/AboutPage";
import ProjectsPage from "pages/Projects/ProjectsPage";
import ContactsPage from "pages/Contacts/ContactsPage";

export const App = () => {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};
