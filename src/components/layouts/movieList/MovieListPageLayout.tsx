import {PropsWithChildren, useState} from "react";
import {MovieListPage} from "../../atoms/movieList/pages/MovieListPage.tsx";
import {MovieListHeader} from "../../molecules/movieList/MovieListHeader.tsx";
import {MovieListContent} from "../../molecules/movieList/MovieListContent.tsx";

interface MovieListPageLayoutProps {
    isDarkTheme: boolean;
}

export const MovieListPageLayout = ({isDarkTheme}: PropsWithChildren<MovieListPageLayoutProps>) => {
  let pageColor = "#eef1f5";

  if (isDarkTheme)
    pageColor = "#1F2937";

  const [searchTerm, setSearchTerm] = useState("");

  return (
      <MovieListPage pageColor={pageColor}>
        <MovieListHeader isDarkMode={isDarkTheme} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <MovieListContent searchTerm={searchTerm}/>
      </MovieListPage>
  );
};