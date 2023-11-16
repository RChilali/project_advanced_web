import styled from "@emotion/styled";

export const SearchBarLightMode = styled("input")({
    display: "flex",
    backgroundColor: "none",
    borderRadius: "30px",
    border: "solid white",
    boxShadow: "none",
    margin: "20px",
    ":focus-visible": {
        borderColor: "solid black"
    },
})

export const SearchBarDarkMode = styled("input")({
    display: "flex",
    backgroundColor: "#374151",
    borderRadius: "30px",
    border: "solid #374151",
    boxShadow: "none",
    margin: "20px",
    ":focus-visible": {
        borderColor: "solid black"
    },
})