import styled from "@emotion/styled";

interface SearchBarProps {
    backgroundColor?: string;
}

export const SearchBar = styled("input")(
    ({backgroundColor}: SearchBarProps) => ({
        display: "flex",
        backgroundColor: backgroundColor ?? "none",
        borderRadius: "30px",
        border: backgroundColor ?? "solid white",
        boxShadow: "none",
        margin: "20px",
        ":focus-visible": {
            borderColor: "solid black"
        },
    }));