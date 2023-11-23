import styled from "@emotion/styled";

interface MovieBackgroundImageProps {
  imgSrc: string;
}

export const BackgroundImage = styled("div")(
    ({imgSrc}: MovieBackgroundImageProps) => ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imgSrc}")`,
      filter: "blur(5px)",
      position: "absolute",
      zIndex: "-1",
      display: "flex",
      height: "1710.08px",
      width: "100%",
      color: "black",
      top: "0",
      left: "0",
    }));
