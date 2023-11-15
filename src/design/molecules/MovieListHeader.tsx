import {PropsWithChildren} from "react";
import {SearchBar} from "../atoms/SearchBar.tsx";
import {HeaderLayout} from "../layouts/HeaderLayout.tsx";
import {Title} from "../atoms/Title.tsx";

interface MovieListHeaderProps {
    title: string;
    placeholder: string;
}

export const MovieListHeader = ({title, placeholder}: PropsWithChildren<MovieListHeaderProps>) => {
    return (
        <HeaderLayout>
            <Title>{title}</Title>
            <SearchBar type="text" placeholder={placeholder}/>
        </HeaderLayout>
    );
};