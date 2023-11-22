import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const BackButton = styled(Link)({
  display: "flex",
  width: "fit-content",
  flexDirection: "row",
  textDecoration: "none",
  font: "normal 400 16px/24px Roboto",
  gap: "6px",
  color: "#FFF",
  "&:hover": {
    transform: "translateX(-0.5rem)",
    transition: "ease-in-out 0.3s",
  },
});