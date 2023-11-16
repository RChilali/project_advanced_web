import styled from "@emotion/styled";
import {PropsWithChildren} from "react";
import {MovieListContent} from "../molecules/MovieListContent.tsx";
import {HeaderLayout} from "./HeaderLayout.tsx";
import {Title} from "../atoms/Title.tsx";
import {SearchBarDarkMode, SearchBarLightMode} from "../atoms/SearchBar.tsx";

interface MovieListPageLayoutProps {
    isDarkTheme: boolean;
}

export const MovieListPageLayout = ({isDarkTheme}: PropsWithChildren<MovieListPageLayoutProps>) => {
    if (isDarkTheme)
        return (<MovieListPageDarkMode>
                <HeaderLayout>
                    <Title>{"🎬🍿 Movie library"}</Title>
                    <SearchBarDarkMode type="text" placeholder={"🔎 Search for movie"}/>
                </HeaderLayout>
                <MovieListContent></MovieListContent>
            </MovieListPageDarkMode>
        );
    else
        return (<MovieListPageLightMode>
                <HeaderLayout>
                    <Title>{"🎬🍿 Movie library"}</Title>
                    <SearchBarLightMode type="text" placeholder={"🔎 Search for movie"}/>
                </HeaderLayout>
                <MovieListContent></MovieListContent>
            </MovieListPageLightMode>
        );
};

const MovieListPageLightMode = styled("div")({
    backgroundColor: "#eef1f5",
    height: "100vh",
    width: "100wh",
    color: "black",
});

const MovieListPageDarkMode = styled("div")({
    backgroundColor: "#1F2937",
    height: "100vh",
    width: "100wh",
    color: "white",
});