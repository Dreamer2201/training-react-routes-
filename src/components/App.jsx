
import { Routes, Route } from "react-router-dom";

import SharedLayut from "./SharedLayout/SharedLayout";
import HomePage from "pages/Home/HomePage";
import MoviePage from "pages/Movie/MoviePage";
import ProjectsPage from "pages/MyMovies/MyMoviePage";
import ContactsPage from "pages/Contacts/ContactsPage";
import DetailsMovie from "pages/OneMovie/DetailsMovie";
import ActorsPage from "pages/OneMovie/Actors/ActorsPage";
import VideoPage from "pages/OneMovie/Video/VideoPage";
import RewiesPage from "pages/OneMovie/Rewies/RewiesPage";

export const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<SharedLayut />} >
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:id" element={< DetailsMovie />}>
              <Route path="video" element={<VideoPage/>} />
              <Route path="cast" element={<ActorsPage />} />
              <Route path="rewies" element={<RewiesPage />} />
            </Route>
            <Route path="/library" element={<ProjectsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
   
    </div>
  );
};
