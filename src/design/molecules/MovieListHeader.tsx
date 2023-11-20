import {Text} from "../atoms/Text.tsx";
import {SearchBar} from "../atoms/SearchBar.tsx";
import {ListHeader} from "../atoms/headers/ListHeader.tsx";
import React, {PropsWithChildren} from "react";

const LIBRARY_TITLE = "🎬🍿 Movie library";
const SEARCH_TITLE = "🔎 Search for movie";

interface MovieListHeaderProps {
    isDarkMode: boolean;
    setSearchTerm: (searchTerm: string) => void;
    searchTerm: string;
}

export const MovieListHeader = ({isDarkMode, setSearchTerm, searchTerm}: PropsWithChildren<MovieListHeaderProps>) => {
    let searchBarColor = "white";
    let textColor = "black"

    if (isDarkMode) {
        searchBarColor = "#374151";
        textColor = "white"
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <ListHeader>
            <Text textColor={textColor}>{LIBRARY_TITLE}</Text>
            <SearchBar
                type="text"
                placeholder={SEARCH_TITLE}
                backgroundColor={searchBarColor}
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </ListHeader>);
}