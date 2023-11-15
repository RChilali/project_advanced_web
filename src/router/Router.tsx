import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.tsx";
import MovieInformation from "../pages/MovieInformation.tsx";
import MovieList from "../pages/MovieList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList></MovieList>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "movie/:movieId",
    element: <MovieInformation/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);