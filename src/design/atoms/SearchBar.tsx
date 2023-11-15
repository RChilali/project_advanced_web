import styled from "@emotion/styled";

export const SearchBar = styled("input")({
    display: "flex",
    borderRadius: "30px",
    border: "solid white",
    boxShadow: "none",
    margin: "20px",
    ":focus-visible": {
        borderColor: "solid black"
    },
})