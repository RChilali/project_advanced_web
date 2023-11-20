import styled from "@emotion/styled";

<<<<<<<< HEAD:src/design/atoms/Header.tsx
export const Header = styled("div")({
========
export const ListHeader = styled("div")({
>>>>>>>> 333a1dc (feature: refacto file name):src/design/atoms/headers/ListHeader.tsx
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    padding: "2rem 0 0 0",
    "@media (max-width: 640px)": {
        display: "block",
    },
});