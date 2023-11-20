import {Text} from "../atoms/Text.tsx";
import {SearchBar} from "../atoms/SearchBar.tsx";
import {ListHeader} from "../atoms/headers/ListHeader.tsx";
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

    return (
        <ListHeader>
            <Text textColor={textColor}>{LIBRARY_TITLE}</Text>
            <SearchBar type="text" placeholder={SEARCH_TITLE} backgroundColor={searchBarColor}/>
        </ListHeader>);
}