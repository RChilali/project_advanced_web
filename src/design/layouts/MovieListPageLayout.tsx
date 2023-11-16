import {PropsWithChildren} from "react";
import {MovieListContent} from "../molecules/MovieListContent.tsx";
import {MovieListPage} from "../atoms/MovieListPage.tsx";
import {MovieListHeader} from "../molecules/MovieListHeader.tsx";

interface MovieListPageLayoutProps {
    isDarkTheme: boolean;
}

export const MovieListPageLayout = ({isDarkTheme}: PropsWithChildren<MovieListPageLayoutProps>) => {
    let pageColor = "#eef1f5";

    if (isDarkTheme)
        pageColor = "#1F2937";

    return (<MovieListPage pageColor={pageColor}>
            <MovieListHeader isDarkMode={isDarkTheme}/>
            <MovieListContent/>
        </MovieListPage>
    );
};