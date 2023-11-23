import {Text} from "../../atoms/common/text/Text.tsx";
import {SearchBar} from "../../atoms/movieList/search/SearchBar.tsx";
import {ListHeader} from "../../atoms/movieList/headers/ListHeader.tsx";
import React, {PropsWithChildren} from "react";
import {TextVariant} from "../../../enum/TextVariant.ts";

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
            <Text  textColor={textColor} variant={TextVariant.extraLarge} isItalic={false} isMediaActive={true}>{LIBRARY_TITLE}</Text>
            <SearchBar
                type="text"
                placeholder={SEARCH_TITLE}
                backgroundColor={searchBarColor}
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </ListHeader>);
}