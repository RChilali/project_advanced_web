import styled from "@emotion/styled";

export const MoviePoster = styled("div")({
  display: "flex",
  width: "256px",
  height: "384px",
  transition: "all 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.05)",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  },
});