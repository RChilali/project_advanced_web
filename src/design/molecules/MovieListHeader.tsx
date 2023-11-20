import {Title} from "../atoms/Title.tsx";
import {SearchBar} from "../atoms/SearchBar.tsx";
import {Header} from "../atoms/Header.tsx";
import {PropsWithChildren} from "react";

const LIBRARY_TITLE = "🎬🍿 Movie library";
const SEARCH_TITLE = "🔎 Search for movie";

interface MovieListHeaderProps {
    isDarkMode: boolean;
}

export const MovieListHeader = ({isDarkMode}: PropsWithChildren<MovieListHeaderProps>) => {
    let searchBarColor = "white";
    let textColor = "black"

    if (isDarkMode) {
        searchBarColor = "#374151";
        textColor = "white"
    }

    return (<Header>
        <Title textColor={textColor}>{LIBRARY_TITLE}</Title>
        <SearchBar type="text" placeholder={SEARCH_TITLE} backgroundColor={searchBarColor}/>
    </Header>);
}