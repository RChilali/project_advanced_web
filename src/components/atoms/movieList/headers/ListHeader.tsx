import styled from "@emotion/styled";

export const ListHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0",
  padding: "2rem 3rem 0 3rem",
  "@media (max-width: 640px)": {
    display: "block",
  },
});