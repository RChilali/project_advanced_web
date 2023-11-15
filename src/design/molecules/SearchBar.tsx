import styled from "@emotion/styled";
import {PropsWithChildren} from "react";

interface SearchBarProps {
    placeholder: string;
    value: string;
}

export const SearchBar = ({placeholder}: PropsWithChildren<SearchBarProps>) => {
    return (
        <SearchBarHolder type="text" placeholder={placeholder}>
        </SearchBarHolder>
    );
};

const SearchBarHolder = styled("input")({
    display: "flex",
    borderRadius: "30px",
    border: "solid white",
    boxShadow: "none",
    margin: "20px",
    ":focus-visible": {
        borderColor: "black"
    },
})