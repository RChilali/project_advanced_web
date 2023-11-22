import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.tsx";
import MovieInformation from "../pages/MovieInformation.tsx";
import MovieList from "../pages/MovieList.tsx";
import "../index.css";
import {QueryClient, QueryClientProvider} from "react-query";
import {loader as movieLoader} from "../rules/MovieLoader.ts";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieList/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "movie/:movieId",
    element: <MovieInformation/>,
    errorElement: <ErrorPage/>,
    loader: movieLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </React.StrictMode>
);