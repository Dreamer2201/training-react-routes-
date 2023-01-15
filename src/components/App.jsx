
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import SharedLayut from "./SharedLayout/SharedLayout";
import HomePage from "pages/Home/HomePage";
import MoviePage from "pages/Movie/MoviePage";
import ProjectsPage from "pages/MyMovies/MyMoviePage";
import ContactsPage from "pages/Contacts/ContactsPage";
import DetailsMovie from "pages/OneMovie/DetailsMovie";


const ActorsPage = lazy(() => import("pages/OneMovie/Actors/ActorsPage"));
const VideoPage = lazy(() => import("pages/OneMovie/Video/VideoPage"));
const RewiesPage = lazy(() => import("pages/OneMovie/Rewies/RewiesPage"));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Page is loading...</p>}>
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
      </Suspense>
    </div>
  );
};
