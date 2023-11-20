import styled from "@emotion/styled";

export const Header = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0",
    padding: "2rem 0 0 0",
    "@media (max-width: 640px)": {
        display: "block",
    },
});