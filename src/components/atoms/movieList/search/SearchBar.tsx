import styled from "@emotion/styled";

interface SearchBarProps {
    backgroundColor?: string;
}

export const SearchBar = styled("input")(({backgroundColor}: SearchBarProps) => ({
    display: "flex",
    backgroundColor: backgroundColor ?? "none",
    border: backgroundColor ?? "solid white",
    borderRadius: "30px",
    boxShadow: "none",
    margin: "20px",
    height: "30px",
    width: "15rem",
    ":focus-visible": {
        borderColor: "solid black"
    },
    "@media (max-width: 640px)": {
        height: "20px",
        width: "85%",
    },
}));