import { HomePage, ArtistListPage, EventListPage } from "../pages";

//Paths to the screens will be defined here//
// A route object has the same properties as a <Route>//
export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/artists", element: <ArtistListPage /> },
    { path: "/events/:name", element: <EventListPage /> },
]